# `accountPrimaryContact` Submodule <a name="`accountPrimaryContact` Submodule" id="@cdktf/provider-aws.accountPrimaryContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountPrimaryContact <a name="AccountPrimaryContact" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact aws_account_primary_contact}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContact(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_line1: str,
  city: str,
  country_code: str,
  full_name: str,
  phone_number: str,
  postal_code: str,
  account_id: str = None,
  address_line2: str = None,
  address_line3: str = None,
  company_name: str = None,
  district_or_county: str = None,
  id: str = None,
  state_or_region: str = None,
  website_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine3">address_line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.companyName">company_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.districtOrCounty">district_or_county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.stateOrRegion">state_or_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.websiteUrl">website_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine1"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.city"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.countryCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.phoneNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.postalCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine2"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.addressLine3"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.companyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.districtOrCounty"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.stateOrRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `website_url`<sup>Optional</sup> <a name="website_url" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.Initializer.parameter.websiteUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2">reset_address_line2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3">reset_address_line3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName">reset_company_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty">reset_district_or_county</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion">reset_state_or_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl">reset_website_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_address_line2` <a name="reset_address_line2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine2"></a>

```python
def reset_address_line2() -> None
```

##### `reset_address_line3` <a name="reset_address_line3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetAddressLine3"></a>

```python
def reset_address_line3() -> None
```

##### `reset_company_name` <a name="reset_company_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetCompanyName"></a>

```python
def reset_company_name() -> None
```

##### `reset_district_or_county` <a name="reset_district_or_county" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetDistrictOrCounty"></a>

```python
def reset_district_or_county() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state_or_region` <a name="reset_state_or_region" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetStateOrRegion"></a>

```python
def reset_state_or_region() -> None
```

##### `reset_website_url` <a name="reset_website_url" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.resetWebsiteUrl"></a>

```python
def reset_website_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContact.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContact.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContact.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContact.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AccountPrimaryContact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AccountPrimaryContact to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AccountPrimaryContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccountPrimaryContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input">address_line1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input">address_line2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input">address_line3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput">city_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput">company_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput">district_or_county_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput">phone_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput">postal_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput">state_or_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput">website_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1">address_line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2">address_line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3">address_line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl">website_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `address_line1_input`<sup>Optional</sup> <a name="address_line1_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1Input"></a>

```python
address_line1_input: str
```

- *Type:* str

---

##### `address_line2_input`<sup>Optional</sup> <a name="address_line2_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2Input"></a>

```python
address_line2_input: str
```

- *Type:* str

---

##### `address_line3_input`<sup>Optional</sup> <a name="address_line3_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3Input"></a>

```python
address_line3_input: str
```

- *Type:* str

---

##### `city_input`<sup>Optional</sup> <a name="city_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.cityInput"></a>

```python
city_input: str
```

- *Type:* str

---

##### `company_name_input`<sup>Optional</sup> <a name="company_name_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyNameInput"></a>

```python
company_name_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `district_or_county_input`<sup>Optional</sup> <a name="district_or_county_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCountyInput"></a>

```python
district_or_county_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `phone_number_input`<sup>Optional</sup> <a name="phone_number_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumberInput"></a>

```python
phone_number_input: str
```

- *Type:* str

---

##### `postal_code_input`<sup>Optional</sup> <a name="postal_code_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCodeInput"></a>

```python
postal_code_input: str
```

- *Type:* str

---

##### `state_or_region_input`<sup>Optional</sup> <a name="state_or_region_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegionInput"></a>

```python
state_or_region_input: str
```

- *Type:* str

---

##### `website_url_input`<sup>Optional</sup> <a name="website_url_input" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrlInput"></a>

```python
website_url_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

---

##### `address_line2`<sup>Required</sup> <a name="address_line2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

---

##### `address_line3`<sup>Required</sup> <a name="address_line3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `district_or_county`<sup>Required</sup> <a name="district_or_county" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `state_or_region`<sup>Required</sup> <a name="state_or_region" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

---

##### `website_url`<sup>Required</sup> <a name="website_url" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.websiteUrl"></a>

```python
website_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContact.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AccountPrimaryContactConfig <a name="AccountPrimaryContactConfig" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import account_primary_contact

accountPrimaryContact.AccountPrimaryContactConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_line1: str,
  city: str,
  country_code: str,
  full_name: str,
  phone_number: str,
  postal_code: str,
  account_id: str = None,
  address_line2: str = None,
  address_line3: str = None,
  company_name: str = None,
  district_or_county: str = None,
  id: str = None,
  state_or_region: str = None,
  website_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1">address_line1</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city">city</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode">country_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber">phone_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode">postal_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2">address_line2</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3">address_line3</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName">company_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty">district_or_county</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion">state_or_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}. |
| <code><a href="#@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl">website_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_line1`<sup>Required</sup> <a name="address_line1" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine1"></a>

```python
address_line1: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_1 AccountPrimaryContact#address_line_1}.

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.city"></a>

```python
city: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#city AccountPrimaryContact#city}.

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#country_code AccountPrimaryContact#country_code}.

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#full_name AccountPrimaryContact#full_name}.

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#phone_number AccountPrimaryContact#phone_number}.

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#postal_code AccountPrimaryContact#postal_code}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#account_id AccountPrimaryContact#account_id}.

---

##### `address_line2`<sup>Optional</sup> <a name="address_line2" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine2"></a>

```python
address_line2: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_2 AccountPrimaryContact#address_line_2}.

---

##### `address_line3`<sup>Optional</sup> <a name="address_line3" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.addressLine3"></a>

```python
address_line3: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#address_line_3 AccountPrimaryContact#address_line_3}.

---

##### `company_name`<sup>Optional</sup> <a name="company_name" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#company_name AccountPrimaryContact#company_name}.

---

##### `district_or_county`<sup>Optional</sup> <a name="district_or_county" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.districtOrCounty"></a>

```python
district_or_county: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#district_or_county AccountPrimaryContact#district_or_county}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#id AccountPrimaryContact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state_or_region`<sup>Optional</sup> <a name="state_or_region" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.stateOrRegion"></a>

```python
state_or_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#state_or_region AccountPrimaryContact#state_or_region}.

---

##### `website_url`<sup>Optional</sup> <a name="website_url" id="@cdktf/provider-aws.accountPrimaryContact.AccountPrimaryContactConfig.property.websiteUrl"></a>

```python
website_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/account_primary_contact#website_url AccountPrimaryContact#website_url}.

---



