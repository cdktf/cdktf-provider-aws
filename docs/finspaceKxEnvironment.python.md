# `aws_finspace_kx_environment`

Refer to the Terraform Registory for docs: [`aws_finspace_kx_environment`](https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment).

# `finspaceKxEnvironment` Submodule <a name="`finspaceKxEnvironment` Submodule" id="@cdktf/provider-aws.finspaceKxEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxEnvironment <a name="FinspaceKxEnvironment" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key_id: str,
  name: str,
  custom_dns_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxEnvironmentTimeouts = None,
  transit_gateway_configuration: FinspaceKxEnvironmentTransitGatewayConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.customDnsConfiguration">custom_dns_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]</code> | custom_dns_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | transit_gateway_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}.

---

##### `custom_dns_configuration`<sup>Optional</sup> <a name="custom_dns_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.customDnsConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]

custom_dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}

---

##### `transit_gateway_configuration`<sup>Optional</sup> <a name="transit_gateway_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.transitGatewayConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

transit_gateway_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration">put_custom_dns_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration">put_transit_gateway_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration">reset_custom_dns_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration">reset_transit_gateway_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_dns_configuration` <a name="put_custom_dns_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration"></a>

```python
def put_custom_dns_configuration(
  value: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}.

---

##### `put_transit_gateway_configuration` <a name="put_transit_gateway_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration"></a>

```python
def put_transit_gateway_configuration(
  routable_cidr_space: str,
  transit_gateway_id: str,
  attachment_network_acl_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]] = None
) -> None
```

###### `routable_cidr_space`<sup>Required</sup> <a name="routable_cidr_space" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration.parameter.routableCidrSpace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}.

---

###### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}.

---

###### `attachment_network_acl_configuration`<sup>Optional</sup> <a name="attachment_network_acl_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration.parameter.attachmentNetworkAclConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]

attachment_network_acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration FinspaceKxEnvironment#attachment_network_acl_configuration}

---

##### `reset_custom_dns_configuration` <a name="reset_custom_dns_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration"></a>

```python
def reset_custom_dns_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transit_gateway_configuration` <a name="reset_transit_gateway_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration"></a>

```python
def reset_transit_gateway_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration">custom_dns_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId">infrastructure_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp">last_modified_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput">custom_dns_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput">transit_gateway_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `custom_dns_configuration`<sup>Required</sup> <a name="custom_dns_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration"></a>

```python
custom_dns_configuration: FinspaceKxEnvironmentCustomDnsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_account_id`<sup>Required</sup> <a name="infrastructure_account_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId"></a>

```python
infrastructure_account_id: str
```

- *Type:* str

---

##### `last_modified_timestamp`<sup>Required</sup> <a name="last_modified_timestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp"></a>

```python
last_modified_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts"></a>

```python
timeouts: FinspaceKxEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a>

---

##### `transit_gateway_configuration`<sup>Required</sup> <a name="transit_gateway_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration"></a>

```python
transit_gateway_configuration: FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a>

---

##### `custom_dns_configuration_input`<sup>Optional</sup> <a name="custom_dns_configuration_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput"></a>

```python
custom_dns_configuration_input: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FinspaceKxEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>]

---

##### `transit_gateway_configuration_input`<sup>Optional</sup> <a name="transit_gateway_configuration_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput"></a>

```python
transit_gateway_configuration_input: FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxEnvironmentConfig <a name="FinspaceKxEnvironmentConfig" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kms_key_id: str,
  name: str,
  custom_dns_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]] = None,
  description: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxEnvironmentTimeouts = None,
  transit_gateway_configuration: FinspaceKxEnvironmentTransitGatewayConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration">custom_dns_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]</code> | custom_dns_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration">transit_gateway_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | transit_gateway_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}.

---

##### `custom_dns_configuration`<sup>Optional</sup> <a name="custom_dns_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration"></a>

```python
custom_dns_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]

custom_dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts"></a>

```python
timeouts: FinspaceKxEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}

---

##### `transit_gateway_configuration`<sup>Optional</sup> <a name="transit_gateway_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration"></a>

```python
transit_gateway_configuration: FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

transit_gateway_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}

---

### FinspaceKxEnvironmentCustomDnsConfiguration <a name="FinspaceKxEnvironmentCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration(
  custom_dns_server_ip: str,
  custom_dns_server_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp">custom_dns_server_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName">custom_dns_server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}. |

---

##### `custom_dns_server_ip`<sup>Required</sup> <a name="custom_dns_server_ip" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp"></a>

```python
custom_dns_server_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}.

---

##### `custom_dns_server_name`<sup>Required</sup> <a name="custom_dns_server_name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName"></a>

```python
custom_dns_server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}.

---

### FinspaceKxEnvironmentTimeouts <a name="FinspaceKxEnvironmentTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}.

---

### FinspaceKxEnvironmentTransitGatewayConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration(
  routable_cidr_space: str,
  transit_gateway_id: str,
  attachment_network_acl_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace">routable_cidr_space</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration">attachment_network_acl_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]</code> | attachment_network_acl_configuration block. |

---

##### `routable_cidr_space`<sup>Required</sup> <a name="routable_cidr_space" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace"></a>

```python
routable_cidr_space: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}.

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}.

---

##### `attachment_network_acl_configuration`<sup>Optional</sup> <a name="attachment_network_acl_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration"></a>

```python
attachment_network_acl_configuration: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]

attachment_network_acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration FinspaceKxEnvironment#attachment_network_acl_configuration}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration(
  cidr_block: str,
  protocol: str,
  rule_action: str,
  rule_number: typing.Union[int, float],
  icmp_type_code: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode = None,
  port_range: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction">rule_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | icmp_type_code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange">port_range</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | port_range block. |

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}.

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}.

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}.

---

##### `icmp_type_code`<sup>Optional</sup> <a name="icmp_type_code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode"></a>

```python
icmp_type_code: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

icmp_type_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#icmp_type_code FinspaceKxEnvironment#icmp_type_code}

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange"></a>

```python
port_range: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#port_range FinspaceKxEnvironment#port_range}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode(
  code: typing.Union[int, float],
  type: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code">code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type">type</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}. |

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}.

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange(
  from: typing.Union[int, float],
  to: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from">from</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to">to</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}. |

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}.

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxEnvironmentCustomDnsConfigurationList <a name="FinspaceKxEnvironmentCustomDnsConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxEnvironmentCustomDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentCustomDnsConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]]

---


### FinspaceKxEnvironmentCustomDnsConfigurationOutputReference <a name="FinspaceKxEnvironmentCustomDnsConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput">custom_dns_server_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput">custom_dns_server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp">custom_dns_server_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName">custom_dns_server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_dns_server_ip_input`<sup>Optional</sup> <a name="custom_dns_server_ip_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput"></a>

```python
custom_dns_server_ip_input: str
```

- *Type:* str

---

##### `custom_dns_server_name_input`<sup>Optional</sup> <a name="custom_dns_server_name_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput"></a>

```python
custom_dns_server_name_input: str
```

- *Type:* str

---

##### `custom_dns_server_ip`<sup>Required</sup> <a name="custom_dns_server_ip" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp"></a>

```python
custom_dns_server_ip: str
```

- *Type:* str

---

##### `custom_dns_server_name`<sup>Required</sup> <a name="custom_dns_server_name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName"></a>

```python
custom_dns_server_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxEnvironmentCustomDnsConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration">FinspaceKxEnvironmentCustomDnsConfiguration</a>]

---


### FinspaceKxEnvironmentTimeoutsOutputReference <a name="FinspaceKxEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>]

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput">type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type">type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput"></a>

```python
type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type"></a>

```python
type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode">put_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange">put_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode">reset_icmp_type_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_icmp_type_code` <a name="put_icmp_type_code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode"></a>

```python
def put_icmp_type_code(
  code: typing.Union[int, float],
  type: typing.Union[int, float]
) -> None
```

###### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode.parameter.code"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}.

---

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode.parameter.type"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}.

---

##### `put_port_range` <a name="put_port_range" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange"></a>

```python
def put_port_range(
  from: typing.Union[int, float],
  to: typing.Union[int, float]
) -> None
```

###### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange.parameter.from"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}.

---

###### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange.parameter.to"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.14.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}.

---

##### `reset_icmp_type_code` <a name="reset_icmp_type_code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode"></a>

```python
def reset_icmp_type_code() -> None
```

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode">icmp_type_code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange">port_range</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput">icmp_type_code_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput">port_range_input</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput">rule_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput">rule_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction">rule_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber">rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `icmp_type_code`<sup>Required</sup> <a name="icmp_type_code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode"></a>

```python
icmp_type_code: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a>

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange"></a>

```python
port_range: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a>

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `icmp_type_code_input`<sup>Optional</sup> <a name="icmp_type_code_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput"></a>

```python
icmp_type_code_input: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput"></a>

```python
port_range_input: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `rule_action_input`<sup>Optional</sup> <a name="rule_action_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput"></a>

```python
rule_action_input: str
```

- *Type:* str

---

##### `rule_number_input`<sup>Optional</sup> <a name="rule_number_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput"></a>

```python
rule_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `rule_action`<sup>Required</sup> <a name="rule_action" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction"></a>

```python
rule_action: str
```

- *Type:* str

---

##### `rule_number`<sup>Required</sup> <a name="rule_number" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber"></a>

```python
rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput">from_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput">to_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from">from</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to">to</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_input`<sup>Optional</sup> <a name="from_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput"></a>

```python
from_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_input`<sup>Optional</sup> <a name="to_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput"></a>

```python
to_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from"></a>

```python
from: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to`<sup>Required</sup> <a name="to" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to"></a>

```python
to: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_environment

finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration">put_attachment_network_acl_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration">reset_attachment_network_acl_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_attachment_network_acl_configuration` <a name="put_attachment_network_acl_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration"></a>

```python
def put_attachment_network_acl_configuration(
  value: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]

---

##### `reset_attachment_network_acl_configuration` <a name="reset_attachment_network_acl_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration"></a>

```python
def reset_attachment_network_acl_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration">attachment_network_acl_configuration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput">attachment_network_acl_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput">routable_cidr_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace">routable_cidr_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_network_acl_configuration`<sup>Required</sup> <a name="attachment_network_acl_configuration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration"></a>

```python
attachment_network_acl_configuration: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a>

---

##### `attachment_network_acl_configuration_input`<sup>Optional</sup> <a name="attachment_network_acl_configuration_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput"></a>

```python
attachment_network_acl_configuration_input: typing.Union[IResolvable, typing.List[FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration</a>]]

---

##### `routable_cidr_space_input`<sup>Optional</sup> <a name="routable_cidr_space_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput"></a>

```python
routable_cidr_space_input: str
```

- *Type:* str

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `routable_cidr_space`<sup>Required</sup> <a name="routable_cidr_space" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace"></a>

```python
routable_cidr_space: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: FinspaceKxEnvironmentTransitGatewayConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---



