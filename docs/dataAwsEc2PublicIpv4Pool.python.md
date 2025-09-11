# `dataAwsEc2PublicIpv4Pool` Submodule <a name="`dataAwsEc2PublicIpv4Pool` Submodule" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2PublicIpv4Pool <a name="DataAwsEc2PublicIpv4Pool" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pool_id: str,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.poolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#region DataAwsEc2PublicIpv4Pool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsEc2PublicIpv4Pool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsEc2PublicIpv4Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2PublicIpv4Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup">network_border_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges">pool_address_ranges</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount">total_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount">total_available_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput">pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `network_border_group`<sup>Required</sup> <a name="network_border_group" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.networkBorderGroup"></a>

```python
network_border_group: str
```

- *Type:* str

---

##### `pool_address_ranges`<sup>Required</sup> <a name="pool_address_ranges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolAddressRanges"></a>

```python
pool_address_ranges: DataAwsEc2PublicIpv4PoolPoolAddressRangesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList">DataAwsEc2PublicIpv4PoolPoolAddressRangesList</a>

---

##### `total_address_count`<sup>Required</sup> <a name="total_address_count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAddressCount"></a>

```python
total_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_available_address_count`<sup>Required</sup> <a name="total_available_address_count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.totalAvailableAddressCount"></a>

```python
total_available_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pool_id_input`<sup>Optional</sup> <a name="pool_id_input" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolIdInput"></a>

```python
pool_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4Pool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2PublicIpv4PoolConfig <a name="DataAwsEc2PublicIpv4PoolConfig" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  pool_id: str,
  id: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId">pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#region DataAwsEc2PublicIpv4Pool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}.

---

### DataAwsEc2PublicIpv4PoolPoolAddressRanges <a name="DataAwsEc2PublicIpv4PoolPoolAddressRanges" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2PublicIpv4PoolPoolAddressRangesList <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesList" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference <a name="DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ec2_public_ipv4_pool

dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount">address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount">available_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress">first_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress">last_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_count`<sup>Required</sup> <a name="address_count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.addressCount"></a>

```python
address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available_address_count`<sup>Required</sup> <a name="available_address_count" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.availableAddressCount"></a>

```python
available_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `first_address`<sup>Required</sup> <a name="first_address" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.firstAddress"></a>

```python
first_address: str
```

- *Type:* str

---

##### `last_address`<sup>Required</sup> <a name="last_address" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.lastAddress"></a>

```python
last_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsEc2PublicIpv4PoolPoolAddressRanges
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsEc2PublicIpv4Pool.DataAwsEc2PublicIpv4PoolPoolAddressRanges">DataAwsEc2PublicIpv4PoolPoolAddressRanges</a>

---



