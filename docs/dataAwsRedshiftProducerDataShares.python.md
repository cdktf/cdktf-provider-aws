# `dataAwsRedshiftProducerDataShares` Submodule <a name="`dataAwsRedshiftProducerDataShares` Submodule" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftProducerDataShares <a name="DataAwsRedshiftProducerDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  producer_arn: str,
  data_shares: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]] = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.producerArn">producer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dataShares">data_shares</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]</code> | data_shares block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `producer_arn`<sup>Required</sup> <a name="producer_arn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.producerArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `data_shares`<sup>Optional</sup> <a name="data_shares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.dataShares"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]

data_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#data_shares DataAwsRedshiftProducerDataShares#data_shares}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares">put_data_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetDataShares">reset_data_shares</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_data_shares` <a name="put_data_shares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares"></a>

```python
def put_data_shares(
  value: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.putDataShares.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]

---

##### `reset_data_shares` <a name="reset_data_shares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetDataShares"></a>

```python
def reset_data_shares() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsRedshiftProducerDataShares that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares">data_shares</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataSharesInput">data_shares_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput">producer_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn">producer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_shares`<sup>Required</sup> <a name="data_shares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataShares"></a>

```python
data_shares: DataAwsRedshiftProducerDataSharesDataSharesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList">DataAwsRedshiftProducerDataSharesDataSharesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `data_shares_input`<sup>Optional</sup> <a name="data_shares_input" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.dataSharesInput"></a>

```python
data_shares_input: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]

---

##### `producer_arn_input`<sup>Optional</sup> <a name="producer_arn_input" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArnInput"></a>

```python
producer_arn_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `producer_arn`<sup>Required</sup> <a name="producer_arn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.producerArn"></a>

```python
producer_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataShares.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftProducerDataSharesConfig <a name="DataAwsRedshiftProducerDataSharesConfig" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  producer_arn: str,
  data_shares: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]] = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn">producer_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dataShares">data_shares</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]</code> | data_shares block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `producer_arn`<sup>Required</sup> <a name="producer_arn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.producerArn"></a>

```python
producer_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}.

---

##### `data_shares`<sup>Optional</sup> <a name="data_shares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.dataShares"></a>

```python
data_shares: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]

data_shares block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#data_shares DataAwsRedshiftProducerDataShares#data_shares}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}.

---

### DataAwsRedshiftProducerDataSharesDataShares <a name="DataAwsRedshiftProducerDataSharesDataShares" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRedshiftProducerDataSharesDataSharesList <a name="DataAwsRedshiftProducerDataSharesDataSharesList" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsRedshiftProducerDataSharesDataSharesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsRedshiftProducerDataSharesDataShares]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]]

---


### DataAwsRedshiftProducerDataSharesDataSharesOutputReference <a name="DataAwsRedshiftProducerDataSharesDataSharesOutputReference" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_redshift_producer_data_shares

dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn">data_share_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy">managed_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn">producer_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_share_arn`<sup>Required</sup> <a name="data_share_arn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.dataShareArn"></a>

```python
data_share_arn: str
```

- *Type:* str

---

##### `managed_by`<sup>Required</sup> <a name="managed_by" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.managedBy"></a>

```python
managed_by: str
```

- *Type:* str

---

##### `producer_arn`<sup>Required</sup> <a name="producer_arn" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.producerArn"></a>

```python
producer_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataSharesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsRedshiftProducerDataSharesDataShares]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsRedshiftProducerDataShares.DataAwsRedshiftProducerDataSharesDataShares">DataAwsRedshiftProducerDataSharesDataShares</a>]

---



