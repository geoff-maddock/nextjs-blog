// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
    res.status(200).json({ text: `{
        "quotes": [
          {
              "approved_at": "2022-11-22 12:33:00",
              "approved_by": {
                  "id": 14775,
                  "name": "Support Management Console"
              },
              "billing_account": "1949708-Neo152",
              "billing_address": {
                  "line_one": null,
                  "line_two": null,
                  "city": null,
                  "country": null,
                  "name": null,
                  "postal_code": null,
                  "state": null
              },
              "churn_reason": null,
              "contract": {
                  "cancel_notice": "90 Days",
                  "company": "Reliable Runners",
                  "payment_terms": "Net 30",
                  "term_type": "Coterminous",
                  "terms_change": null,
                  "type": "Billing"
              },
              "created_at": "2022-11-22 11:42",
              "created_by": {
                  "id": 25314,
                  "name": "Kristin Puzon"
              },
              "customer": {
                  "id": 209825,
                  "name": "Reliable Runners"
              },
              "delay_billing": false,
              "delay_billing_days": null,
              "delivery_id": 52327,
              "expired_at": null,
              "expired_by": {
                  "id": null,
                  "name": null
              },
              "group_id": null,
              "has_non_standard_commissions": false,
              "id": 181193,
              "install": {
                  "date": null,
                  "in_client_facility": false,
                  "location_id": null
              },
              "is_decommission": false,
              "is_proof_of_concept": false,
              "is_renewal": false,
              "mrr_impact": 150.00,
              "nrr_impact": 100.00,
              "notes": null,
              "original": {
                  "contract_number": 38327,
                  "created_at": "2020-07-07 00:00:00",
                  "install_date": "2012-12-28"
              },
              "partner": {
                  "name": "No partner",
                  "rate_override": null
              },
              "platform_services_required": false,
              "presented_at": "2022-11-22 12:33:00",
              "presented_by": {
                  "id": 25314,
                  "name": "Kristin Puzon"
              },
              "primary_contact": {
                  "name": "Jeff Bowman",
                  "email": "jbowman@integrateditgroup.com",
                  "phone": "(216) 370-7997x1014",
                  "secondary_phone": "(216) 370-7997x1014",
                  "type": null,
                  "user_id": 40021
              },
              "primary_datacenter": {
                  "id": 9,
                  "name": "Cleveland (152)"
              },
              "primary_sales_rep": {
                  "id": 25314,
                  "name": "Kristin Puzon",
                  "role": "salesrep"
              },
              "product_strategy_required": false,
              "projected_close_date": "2022-11-22 00:00:00",
              "reject_reason": null,
              "replaced_by": null,
              "revision": 0,
              "sales_engineer": {
                  "id": 52633,
                  "name": "Chance Medford"
              },
              "sales_lead": {
                  "id": 4,
                  "name": "Existing Customer" 
              },
              "sales_rep_split_percentage": 100,
              "salesforce": {
                  "id": "0065Y00001gk9cOQAQ",
                  "excluded_from_forecast": false,
                  "stage": "Closed Won",
                  "is_synced": true
              },
              "secondary_contact": {
                  "name": null,
                  "email": null,
                  "phone": null,
                  "secondary_phone": null,
                  "type": null,
                  "user_id": null
              },
              "secondary_sales_rep": {
                  "id": null,
                  "name": null,
                  "role": null
              },
              "signed_at": "2022-11-22 15:23:00",
              "signed_by": {
                  "id": 51571,
                  "name": "Crystal Cobbett"
              },
              "status": "Signed",
              "submitted_at": "2022-11-22 12:33:00",
              "submitted_by": {
                  "id": 25314,
                  "name": "Kristin Puzon"
              },
              "title": "Momentum  - Additional Cross Connect to 152",
              "undo_submit_at": null,
              "updated_at": "2022-11-22 15:40:00",
              "updated_by": {
                  "id": 25314,
                  "name": "Kristin Puzon"
              }
          }
        ]
      }`});
}