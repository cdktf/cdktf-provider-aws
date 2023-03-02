# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktf/provider-aws.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack aws_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameter: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]] = None,
  template_body: str = None,
  template_s3_uri: str = None,
  timeouts: ConfigOrganizationConformancePackTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.inputParameter">input_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]</code> | input_parameter block. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}.

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}.

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.deliveryS3KeyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.excludedAccounts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameter`<sup>Optional</sup> <a name="input_parameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.inputParameter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]

input_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#input_parameter ConfigOrganizationConformancePack#input_parameter}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}.

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.templateS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#timeouts ConfigOrganizationConformancePack#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter">put_input_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">reset_delivery_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">reset_delivery_s3_key_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">reset_excluded_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter">reset_input_parameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">reset_template_s3_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_input_parameter` <a name="put_input_parameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter"></a>

```python
def put_input_parameter(
  value: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}.

---

##### `reset_delivery_s3_bucket` <a name="reset_delivery_s3_bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```python
def reset_delivery_s3_bucket() -> None
```

##### `reset_delivery_s3_key_prefix` <a name="reset_delivery_s3_key_prefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```python
def reset_delivery_s3_key_prefix() -> None
```

##### `reset_excluded_accounts` <a name="reset_excluded_accounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```python
def reset_excluded_accounts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input_parameter` <a name="reset_input_parameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter"></a>

```python
def reset_input_parameter() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_s3_uri` <a name="reset_template_s3_uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```python
def reset_template_s3_uri() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePack.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter">input_parameter</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">delivery_s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">delivery_s3_key_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">excluded_accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput">input_parameter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">template_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `input_parameter`<sup>Required</sup> <a name="input_parameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter"></a>

```python
input_parameter: ConfigOrganizationConformancePackInputParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts"></a>

```python
timeouts: ConfigOrganizationConformancePackTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a>

---

##### `delivery_s3_bucket_input`<sup>Optional</sup> <a name="delivery_s3_bucket_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```python
delivery_s3_bucket_input: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix_input`<sup>Optional</sup> <a name="delivery_s3_key_prefix_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```python
delivery_s3_key_prefix_input: str
```

- *Type:* str

---

##### `excluded_accounts_input`<sup>Optional</sup> <a name="excluded_accounts_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```python
excluded_accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_parameter_input`<sup>Optional</sup> <a name="input_parameter_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput"></a>

```python
input_parameter_input: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_s3_uri_input`<sup>Optional</sup> <a name="template_s3_uri_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```python
template_s3_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ConfigOrganizationConformancePackTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>, cdktf.IResolvable]

---

##### `delivery_s3_bucket`<sup>Required</sup> <a name="delivery_s3_bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

---

##### `delivery_s3_key_prefix`<sup>Required</sup> <a name="delivery_s3_key_prefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

---

##### `excluded_accounts`<sup>Required</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_s3_uri`<sup>Required</sup> <a name="template_s3_uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  delivery_s3_bucket: str = None,
  delivery_s3_key_prefix: str = None,
  excluded_accounts: typing.List[str] = None,
  id: str = None,
  input_parameter: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]] = None,
  template_body: str = None,
  template_s3_uri: str = None,
  timeouts: ConfigOrganizationConformancePackTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">delivery_s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">delivery_s3_key_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">excluded_accounts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter">input_parameter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]</code> | input_parameter block. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">template_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}.

---

##### `delivery_s3_bucket`<sup>Optional</sup> <a name="delivery_s3_bucket" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```python
delivery_s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}.

---

##### `delivery_s3_key_prefix`<sup>Optional</sup> <a name="delivery_s3_key_prefix" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```python
delivery_s3_key_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}.

---

##### `excluded_accounts`<sup>Optional</sup> <a name="excluded_accounts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```python
excluded_accounts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input_parameter`<sup>Optional</sup> <a name="input_parameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter"></a>

```python
input_parameter: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]

input_parameter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#input_parameter ConfigOrganizationConformancePack#input_parameter}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}.

---

##### `template_s3_uri`<sup>Optional</sup> <a name="template_s3_uri" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```python
template_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts"></a>

```python
timeouts: ConfigOrganizationConformancePackTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#timeouts ConfigOrganizationConformancePack#timeouts}

---

### ConfigOrganizationConformancePackInputParameter <a name="ConfigOrganizationConformancePackInputParameter" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter(
  parameter_name: str,
  parameter_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName">parameter_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue">parameter_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTimeouts <a name="ConfigOrganizationConformancePackTimeouts" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackInputParameterList <a name="ConfigOrganizationConformancePackInputParameterList" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigOrganizationConformancePackInputParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ConfigOrganizationConformancePackInputParameter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>]]

---


### ConfigOrganizationConformancePackInputParameterOutputReference <a name="ConfigOrganizationConformancePackInputParameterOutputReference" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput">parameter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName">parameter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_name_input`<sup>Optional</sup> <a name="parameter_name_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput"></a>

```python
parameter_name_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_name`<sup>Required</sup> <a name="parameter_name" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName"></a>

```python
parameter_name: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigOrganizationConformancePackInputParameter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>, cdktf.IResolvable]

---


### ConfigOrganizationConformancePackTimeoutsOutputReference <a name="ConfigOrganizationConformancePackTimeoutsOutputReference" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import config_organization_conformance_pack

configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ConfigOrganizationConformancePackTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>, cdktf.IResolvable]

---



