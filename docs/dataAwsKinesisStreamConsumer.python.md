# `dataAwsKinesisStreamConsumer` Submodule <a name="`dataAwsKinesisStreamConsumer` Submodule" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKinesisStreamConsumer <a name="DataAwsKinesisStreamConsumer" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer aws_kinesis_stream_consumer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kinesis_stream_consumer

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_arn: str,
  arn: str = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.streamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kinesis_stream_consumer

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kinesis_stream_consumer

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kinesis_stream_consumer

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput">stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stream_arn_input`<sup>Optional</sup> <a name="stream_arn_input" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput"></a>

```python
stream_arn_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKinesisStreamConsumerConfig <a name="DataAwsKinesisStreamConsumerConfig" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_kinesis_stream_consumer

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  stream_arn: str,
  arn: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn">stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}.

---



