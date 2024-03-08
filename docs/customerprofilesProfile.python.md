# `customerprofilesProfile` Submodule <a name="`customerprofilesProfile` Submodule" id="@cdktf/provider-aws.customerprofilesProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesProfile <a name="CustomerprofilesProfile" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile aws_customerprofiles_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  account_number: str = None,
  additional_information: str = None,
  address: CustomerprofilesProfileAddress = None,
  attributes: typing.Mapping[str] = None,
  billing_address: CustomerprofilesProfileBillingAddress = None,
  birth_date: str = None,
  business_email_address: str = None,
  business_name: str = None,
  business_phone_number: str = None,
  email_address: str = None,
  first_name: str = None,
  gender_string: str = None,
  home_phone_number: str = None,
  id: str = None,
  last_name: str = None,
  mailing_address: CustomerprofilesProfileMailingAddress = None,
  middle_name: str = None,
  mobile_phone_number: str = None,
  party_type_string: str = None,
  personal_email_address: str = None,
  phone_number: str = None,
  shipping_address: CustomerprofilesProfileShippingAddress = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.accountNumber">account_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.additionalInformation">additional_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.billingAddress">billing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.birthDate">birth_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessEmailAddress">business_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessName">business_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessPhoneNumber">business_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.genderString">gender_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.homePhoneNumber">home_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mailingAddress">mailing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mobilePhoneNumber">mobile_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.partyTypeString">party_type_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.personalEmailAddress">personal_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `account_number`<sup>Optional</sup> <a name="account_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.accountNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `additional_information`<sup>Optional</sup> <a name="additional_information" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.additionalInformation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.address"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.attributes"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `billing_address`<sup>Optional</sup> <a name="billing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.billingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `birth_date`<sup>Optional</sup> <a name="birth_date" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.birthDate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `business_email_address`<sup>Optional</sup> <a name="business_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessEmailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `business_name`<sup>Optional</sup> <a name="business_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `business_phone_number`<sup>Optional</sup> <a name="business_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.businessPhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.emailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.firstName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `gender_string`<sup>Optional</sup> <a name="gender_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.genderString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `home_phone_number`<sup>Optional</sup> <a name="home_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.homePhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.lastName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `mailing_address`<sup>Optional</sup> <a name="mailing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mailingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.middleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `mobile_phone_number`<sup>Optional</sup> <a name="mobile_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.mobilePhoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `party_type_string`<sup>Optional</sup> <a name="party_type_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.partyTypeString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `personal_email_address`<sup>Optional</sup> <a name="personal_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.personalEmailAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `shipping_address`<sup>Optional</sup> <a name="shipping_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.Initializer.parameter.shippingAddress"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress">put_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress">put_billing_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress">put_mailing_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress">put_shipping_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber">reset_account_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation">reset_additional_information</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes">reset_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress">reset_billing_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate">reset_birth_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress">reset_business_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName">reset_business_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber">reset_business_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString">reset_gender_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber">reset_home_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName">reset_last_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress">reset_mailing_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName">reset_middle_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber">reset_mobile_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString">reset_party_type_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress">reset_personal_email_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber">reset_phone_number</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress">reset_shipping_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_address` <a name="put_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress"></a>

```python
def put_address(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
) -> None
```

###### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.address1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

###### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.address2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

###### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.address3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

###### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.address4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

###### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.county"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

###### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.province"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putAddress.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

##### `put_billing_address` <a name="put_billing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress"></a>

```python
def put_billing_address(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
) -> None
```

###### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.address1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

###### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.address2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

###### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.address3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

###### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.address4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

###### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.county"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

###### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.province"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putBillingAddress.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

##### `put_mailing_address` <a name="put_mailing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress"></a>

```python
def put_mailing_address(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
) -> None
```

###### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.address1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

###### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.address2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

###### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.address3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

###### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.address4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

###### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.county"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

###### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.province"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putMailingAddress.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

##### `put_shipping_address` <a name="put_shipping_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress"></a>

```python
def put_shipping_address(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
) -> None
```

###### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.address1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

###### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.address2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

###### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.address3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

###### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.address4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

###### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

###### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.county"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

###### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

###### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.province"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.putShippingAddress.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

##### `reset_account_number` <a name="reset_account_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAccountNumber"></a>

```python
def reset_account_number() -> None
```

##### `reset_additional_information` <a name="reset_additional_information" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAdditionalInformation"></a>

```python
def reset_additional_information() -> None
```

##### `reset_address` <a name="reset_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_attributes` <a name="reset_attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetAttributes"></a>

```python
def reset_attributes() -> None
```

##### `reset_billing_address` <a name="reset_billing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBillingAddress"></a>

```python
def reset_billing_address() -> None
```

##### `reset_birth_date` <a name="reset_birth_date" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBirthDate"></a>

```python
def reset_birth_date() -> None
```

##### `reset_business_email_address` <a name="reset_business_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessEmailAddress"></a>

```python
def reset_business_email_address() -> None
```

##### `reset_business_name` <a name="reset_business_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessName"></a>

```python
def reset_business_name() -> None
```

##### `reset_business_phone_number` <a name="reset_business_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetBusinessPhoneNumber"></a>

```python
def reset_business_phone_number() -> None
```

##### `reset_email_address` <a name="reset_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_first_name` <a name="reset_first_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_gender_string` <a name="reset_gender_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetGenderString"></a>

```python
def reset_gender_string() -> None
```

##### `reset_home_phone_number` <a name="reset_home_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetHomePhoneNumber"></a>

```python
def reset_home_phone_number() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetLastName"></a>

```python
def reset_last_name() -> None
```

##### `reset_mailing_address` <a name="reset_mailing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMailingAddress"></a>

```python
def reset_mailing_address() -> None
```

##### `reset_middle_name` <a name="reset_middle_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMiddleName"></a>

```python
def reset_middle_name() -> None
```

##### `reset_mobile_phone_number` <a name="reset_mobile_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetMobilePhoneNumber"></a>

```python
def reset_mobile_phone_number() -> None
```

##### `reset_party_type_string` <a name="reset_party_type_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPartyTypeString"></a>

```python
def reset_party_type_string() -> None
```

##### `reset_personal_email_address` <a name="reset_personal_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPersonalEmailAddress"></a>

```python
def reset_personal_email_address() -> None
```

##### `reset_phone_number` <a name="reset_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetPhoneNumber"></a>

```python
def reset_phone_number() -> None
```

##### `reset_shipping_address` <a name="reset_shipping_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.resetShippingAddress"></a>

```python
def reset_shipping_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfile.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CustomerprofilesProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress">billing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress">mailing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput">account_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput">additional_information_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput">address_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput">attributes_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput">billing_address_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput">birth_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput">business_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput">business_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput">business_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput">gender_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput">home_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput">mailing_address_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput">middle_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput">mobile_phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput">party_type_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput">personal_email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput">shipping_address_input</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber">account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation">additional_information</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate">birth_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress">business_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName">business_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber">business_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString">gender_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber">home_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber">mobile_phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString">party_type_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress">personal_email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.address"></a>

```python
address: CustomerprofilesProfileAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference">CustomerprofilesProfileAddressOutputReference</a>

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddress"></a>

```python
billing_address: CustomerprofilesProfileBillingAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference">CustomerprofilesProfileBillingAddressOutputReference</a>

---

##### `mailing_address`<sup>Required</sup> <a name="mailing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddress"></a>

```python
mailing_address: CustomerprofilesProfileMailingAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference">CustomerprofilesProfileMailingAddressOutputReference</a>

---

##### `shipping_address`<sup>Required</sup> <a name="shipping_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddress"></a>

```python
shipping_address: CustomerprofilesProfileShippingAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference">CustomerprofilesProfileShippingAddressOutputReference</a>

---

##### `account_number_input`<sup>Optional</sup> <a name="account_number_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumberInput"></a>

```python
account_number_input: str
```

- *Type:* str

---

##### `additional_information_input`<sup>Optional</sup> <a name="additional_information_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformationInput"></a>

```python
additional_information_input: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.addressInput"></a>

```python
address_input: CustomerprofilesProfileAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributesInput"></a>

```python
attributes_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `billing_address_input`<sup>Optional</sup> <a name="billing_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.billingAddressInput"></a>

```python
billing_address_input: CustomerprofilesProfileBillingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---

##### `birth_date_input`<sup>Optional</sup> <a name="birth_date_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDateInput"></a>

```python
birth_date_input: str
```

- *Type:* str

---

##### `business_email_address_input`<sup>Optional</sup> <a name="business_email_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddressInput"></a>

```python
business_email_address_input: str
```

- *Type:* str

---

##### `business_name_input`<sup>Optional</sup> <a name="business_name_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessNameInput"></a>

```python
business_name_input: str
```

- *Type:* str

---

##### `business_phone_number_input`<sup>Optional</sup> <a name="business_phone_number_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumberInput"></a>

```python
business_phone_number_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `gender_string_input`<sup>Optional</sup> <a name="gender_string_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderStringInput"></a>

```python
gender_string_input: str
```

- *Type:* str

---

##### `home_phone_number_input`<sup>Optional</sup> <a name="home_phone_number_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumberInput"></a>

```python
home_phone_number_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `mailing_address_input`<sup>Optional</sup> <a name="mailing_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mailingAddressInput"></a>

```python
mailing_address_input: CustomerprofilesProfileMailingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---

##### `middle_name_input`<sup>Optional</sup> <a name="middle_name_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleNameInput"></a>

```python
middle_name_input: str
```

- *Type:* str

---

##### `mobile_phone_number_input`<sup>Optional</sup> <a name="mobile_phone_number_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumberInput"></a>

```python
mobile_phone_number_input: str
```

- *Type:* str

---

##### `party_type_string_input`<sup>Optional</sup> <a name="party_type_string_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeStringInput"></a>

```python
party_type_string_input: str
```

- *Type:* str

---

##### `personal_email_address_input`<sup>Optional</sup> <a name="personal_email_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddressInput"></a>

```python
personal_email_address_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `shipping_address_input`<sup>Optional</sup> <a name="shipping_address_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.shippingAddressInput"></a>

```python
shipping_address_input: CustomerprofilesProfileShippingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---

##### `account_number`<sup>Required</sup> <a name="account_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.accountNumber"></a>

```python
account_number: str
```

- *Type:* str

---

##### `additional_information`<sup>Required</sup> <a name="additional_information" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.additionalInformation"></a>

```python
additional_information: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `birth_date`<sup>Required</sup> <a name="birth_date" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.birthDate"></a>

```python
birth_date: str
```

- *Type:* str

---

##### `business_email_address`<sup>Required</sup> <a name="business_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessEmailAddress"></a>

```python
business_email_address: str
```

- *Type:* str

---

##### `business_name`<sup>Required</sup> <a name="business_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

---

##### `business_phone_number`<sup>Required</sup> <a name="business_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.businessPhoneNumber"></a>

```python
business_phone_number: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `gender_string`<sup>Required</sup> <a name="gender_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.genderString"></a>

```python
gender_string: str
```

- *Type:* str

---

##### `home_phone_number`<sup>Required</sup> <a name="home_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.homePhoneNumber"></a>

```python
home_phone_number: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `mobile_phone_number`<sup>Required</sup> <a name="mobile_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.mobilePhoneNumber"></a>

```python
mobile_phone_number: str
```

- *Type:* str

---

##### `party_type_string`<sup>Required</sup> <a name="party_type_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.partyTypeString"></a>

```python
party_type_string: str
```

- *Type:* str

---

##### `personal_email_address`<sup>Required</sup> <a name="personal_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.personalEmailAddress"></a>

```python
personal_email_address: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesProfileAddress <a name="CustomerprofilesProfileAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileAddress(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3">address3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4">address4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address1"></a>

```python
address1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address2"></a>

```python
address2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address3"></a>

```python
address3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.address4"></a>

```python
address4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileBillingAddress <a name="CustomerprofilesProfileBillingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileBillingAddress(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3">address3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4">address4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address1"></a>

```python
address1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address2"></a>

```python
address2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address3"></a>

```python
address3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.address4"></a>

```python
address4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileConfig <a name="CustomerprofilesProfileConfig" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  account_number: str = None,
  additional_information: str = None,
  address: CustomerprofilesProfileAddress = None,
  attributes: typing.Mapping[str] = None,
  billing_address: CustomerprofilesProfileBillingAddress = None,
  birth_date: str = None,
  business_email_address: str = None,
  business_name: str = None,
  business_phone_number: str = None,
  email_address: str = None,
  first_name: str = None,
  gender_string: str = None,
  home_phone_number: str = None,
  id: str = None,
  last_name: str = None,
  mailing_address: CustomerprofilesProfileMailingAddress = None,
  middle_name: str = None,
  mobile_phone_number: str = None,
  party_type_string: str = None,
  personal_email_address: str = None,
  phone_number: str = None,
  shipping_address: CustomerprofilesProfileShippingAddress = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber">account_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation">additional_information</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address">address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes">attributes</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress">billing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | billing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate">birth_date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress">business_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName">business_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber">business_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress">email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString">gender_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber">home_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress">mailing_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | mailing_address block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName">middle_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber">mobile_phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString">party_type_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress">personal_email_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress">shipping_address</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | shipping_address block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#domain_name CustomerprofilesProfile#domain_name}.

---

##### `account_number`<sup>Optional</sup> <a name="account_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.accountNumber"></a>

```python
account_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#account_number CustomerprofilesProfile#account_number}.

---

##### `additional_information`<sup>Optional</sup> <a name="additional_information" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.additionalInformation"></a>

```python
additional_information: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#additional_information CustomerprofilesProfile#additional_information}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.address"></a>

```python
address: CustomerprofilesProfileAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address CustomerprofilesProfile#address}

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.attributes"></a>

```python
attributes: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#attributes CustomerprofilesProfile#attributes}.

---

##### `billing_address`<sup>Optional</sup> <a name="billing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.billingAddress"></a>

```python
billing_address: CustomerprofilesProfileBillingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

billing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#billing_address CustomerprofilesProfile#billing_address}

---

##### `birth_date`<sup>Optional</sup> <a name="birth_date" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.birthDate"></a>

```python
birth_date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#birth_date CustomerprofilesProfile#birth_date}.

---

##### `business_email_address`<sup>Optional</sup> <a name="business_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessEmailAddress"></a>

```python
business_email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_email_address CustomerprofilesProfile#business_email_address}.

---

##### `business_name`<sup>Optional</sup> <a name="business_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessName"></a>

```python
business_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_name CustomerprofilesProfile#business_name}.

---

##### `business_phone_number`<sup>Optional</sup> <a name="business_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.businessPhoneNumber"></a>

```python
business_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#business_phone_number CustomerprofilesProfile#business_phone_number}.

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#email_address CustomerprofilesProfile#email_address}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#first_name CustomerprofilesProfile#first_name}.

---

##### `gender_string`<sup>Optional</sup> <a name="gender_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.genderString"></a>

```python
gender_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#gender_string CustomerprofilesProfile#gender_string}.

---

##### `home_phone_number`<sup>Optional</sup> <a name="home_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.homePhoneNumber"></a>

```python
home_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#home_phone_number CustomerprofilesProfile#home_phone_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#id CustomerprofilesProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#last_name CustomerprofilesProfile#last_name}.

---

##### `mailing_address`<sup>Optional</sup> <a name="mailing_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mailingAddress"></a>

```python
mailing_address: CustomerprofilesProfileMailingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

mailing_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mailing_address CustomerprofilesProfile#mailing_address}

---

##### `middle_name`<sup>Optional</sup> <a name="middle_name" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#middle_name CustomerprofilesProfile#middle_name}.

---

##### `mobile_phone_number`<sup>Optional</sup> <a name="mobile_phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.mobilePhoneNumber"></a>

```python
mobile_phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#mobile_phone_number CustomerprofilesProfile#mobile_phone_number}.

---

##### `party_type_string`<sup>Optional</sup> <a name="party_type_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.partyTypeString"></a>

```python
party_type_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#party_type_string CustomerprofilesProfile#party_type_string}.

---

##### `personal_email_address`<sup>Optional</sup> <a name="personal_email_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.personalEmailAddress"></a>

```python
personal_email_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#personal_email_address CustomerprofilesProfile#personal_email_address}.

---

##### `phone_number`<sup>Optional</sup> <a name="phone_number" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#phone_number CustomerprofilesProfile#phone_number}.

---

##### `shipping_address`<sup>Optional</sup> <a name="shipping_address" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileConfig.property.shippingAddress"></a>

```python
shipping_address: CustomerprofilesProfileShippingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

shipping_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#shipping_address CustomerprofilesProfile#shipping_address}

---

### CustomerprofilesProfileMailingAddress <a name="CustomerprofilesProfileMailingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileMailingAddress(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3">address3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4">address4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address1"></a>

```python
address1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address2"></a>

```python
address2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address3"></a>

```python
address3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.address4"></a>

```python
address4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

### CustomerprofilesProfileShippingAddress <a name="CustomerprofilesProfileShippingAddress" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileShippingAddress(
  address1: str = None,
  address2: str = None,
  address3: str = None,
  address4: str = None,
  city: str = None,
  country: str = None,
  county: str = None,
  postal_code: str = None,
  province: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1">address1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2">address2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3">address3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4">address4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county">county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province">province</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}. |

---

##### `address1`<sup>Optional</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address1"></a>

```python
address1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_1 CustomerprofilesProfile#address_1}.

---

##### `address2`<sup>Optional</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address2"></a>

```python
address2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_2 CustomerprofilesProfile#address_2}.

---

##### `address3`<sup>Optional</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address3"></a>

```python
address3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_3 CustomerprofilesProfile#address_3}.

---

##### `address4`<sup>Optional</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.address4"></a>

```python
address4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#address_4 CustomerprofilesProfile#address_4}.

---

##### `city`<sup>Optional</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#city CustomerprofilesProfile#city}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#country CustomerprofilesProfile#country}.

---

##### `county`<sup>Optional</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.county"></a>

```python
county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#county CustomerprofilesProfile#county}.

---

##### `postal_code`<sup>Optional</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#postal_code CustomerprofilesProfile#postal_code}.

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.province"></a>

```python
province: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#province CustomerprofilesProfile#province}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.40.0/docs/resources/customerprofiles_profile#state CustomerprofilesProfile#state}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesProfileAddressOutputReference <a name="CustomerprofilesProfileAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3">reset_address3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4">reset_address4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address1` <a name="reset_address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_address3` <a name="reset_address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress3"></a>

```python
def reset_address3() -> None
```

##### `reset_address4` <a name="reset_address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetAddress4"></a>

```python
def reset_address4() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input">address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input">address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3">address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4">address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `address3_input`<sup>Optional</sup> <a name="address3_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3Input"></a>

```python
address3_input: str
```

- *Type:* str

---

##### `address4_input`<sup>Optional</sup> <a name="address4_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4Input"></a>

```python
address4_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address3"></a>

```python
address3: str
```

- *Type:* str

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.address4"></a>

```python
address4: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddressOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesProfileAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileAddress">CustomerprofilesProfileAddress</a>

---


### CustomerprofilesProfileBillingAddressOutputReference <a name="CustomerprofilesProfileBillingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3">reset_address3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4">reset_address4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address1` <a name="reset_address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_address3` <a name="reset_address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress3"></a>

```python
def reset_address3() -> None
```

##### `reset_address4` <a name="reset_address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetAddress4"></a>

```python
def reset_address4() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input">address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input">address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3">address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4">address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `address3_input`<sup>Optional</sup> <a name="address3_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3Input"></a>

```python
address3_input: str
```

- *Type:* str

---

##### `address4_input`<sup>Optional</sup> <a name="address4_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4Input"></a>

```python
address4_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address3"></a>

```python
address3: str
```

- *Type:* str

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.address4"></a>

```python
address4: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesProfileBillingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileBillingAddress">CustomerprofilesProfileBillingAddress</a>

---


### CustomerprofilesProfileMailingAddressOutputReference <a name="CustomerprofilesProfileMailingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3">reset_address3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4">reset_address4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address1` <a name="reset_address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_address3` <a name="reset_address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress3"></a>

```python
def reset_address3() -> None
```

##### `reset_address4` <a name="reset_address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetAddress4"></a>

```python
def reset_address4() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input">address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input">address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3">address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4">address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `address3_input`<sup>Optional</sup> <a name="address3_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3Input"></a>

```python
address3_input: str
```

- *Type:* str

---

##### `address4_input`<sup>Optional</sup> <a name="address4_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4Input"></a>

```python
address4_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address3"></a>

```python
address3: str
```

- *Type:* str

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.address4"></a>

```python
address4: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddressOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesProfileMailingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileMailingAddress">CustomerprofilesProfileMailingAddress</a>

---


### CustomerprofilesProfileShippingAddressOutputReference <a name="CustomerprofilesProfileShippingAddressOutputReference" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import customerprofiles_profile

customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1">reset_address1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2">reset_address2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3">reset_address3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4">reset_address4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity">reset_city</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty">reset_county</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode">reset_postal_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince">reset_province</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_address1` <a name="reset_address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress1"></a>

```python
def reset_address1() -> None
```

##### `reset_address2` <a name="reset_address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress2"></a>

```python
def reset_address2() -> None
```

##### `reset_address3` <a name="reset_address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress3"></a>

```python
def reset_address3() -> None
```

##### `reset_address4` <a name="reset_address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetAddress4"></a>

```python
def reset_address4() -> None
```

##### `reset_city` <a name="reset_city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCity"></a>

```python
def reset_city() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_county` <a name="reset_county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetCounty"></a>

```python
def reset_county() -> None
```

##### `reset_postal_code` <a name="reset_postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetPostalCode"></a>

```python
def reset_postal_code() -> None
```

##### `reset_province` <a name="reset_province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetProvince"></a>

```python
def reset_province() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input">address1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input">address2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input">address3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input">address4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput">county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput">province_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3">address3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4">address4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1_input`<sup>Optional</sup> <a name="address1_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1Input"></a>

```python
address1_input: str
```

- *Type:* str

---

##### `address2_input`<sup>Optional</sup> <a name="address2_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2Input"></a>

```python
address2_input: str
```

- *Type:* str

---

##### `address3_input`<sup>Optional</sup> <a name="address3_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3Input"></a>

```python
address3_input: str
```

- *Type:* str

---

##### `address4_input`<sup>Optional</sup> <a name="address4_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4Input"></a>

```python
address4_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `county_input`<sup>Optional</sup> <a name="county_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.countyInput"></a>

```python
county_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `province_input`<sup>Optional</sup> <a name="province_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.provinceInput"></a>

```python
province_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `address3`<sup>Required</sup> <a name="address3" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address3"></a>

```python
address3: str
```

- *Type:* str

---

##### `address4`<sup>Required</sup> <a name="address4" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.address4"></a>

```python
address4: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddressOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesProfileShippingAddress
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesProfile.CustomerprofilesProfileShippingAddress">CustomerprofilesProfileShippingAddress</a>

---



