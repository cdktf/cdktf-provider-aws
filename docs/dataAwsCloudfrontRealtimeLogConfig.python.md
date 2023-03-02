# `dataAwsCloudfrontRealtimeLogConfig` Submodule <a name="`dataAwsCloudfrontRealtimeLogConfig` Submodule" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCloudfrontRealtimeLogConfig <a name="DataAwsCloudfrontRealtimeLogConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config aws_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate">sampling_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.endpoint"></a>

```python
endpoint: DataAwsCloudfrontRealtimeLogConfigEndpointList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList">DataAwsCloudfrontRealtimeLogConfigEndpointList</a>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sampling_rate`<sup>Required</sup> <a name="sampling_rate" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.samplingRate"></a>

```python
sampling_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCloudfrontRealtimeLogConfigConfig <a name="DataAwsCloudfrontRealtimeLogConfigConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#name DataAwsCloudfrontRealtimeLogConfig#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudfront_realtime_log_config#id DataAwsCloudfrontRealtimeLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsCloudfrontRealtimeLogConfigEndpoint <a name="DataAwsCloudfrontRealtimeLogConfigEndpoint" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint()
```


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn">stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `stream_arn`<sup>Required</sup> <a name="stream_arn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.streamArn"></a>

```python
stream_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfig</a>

---


### DataAwsCloudfrontRealtimeLogConfigEndpointList <a name="DataAwsCloudfrontRealtimeLogConfigEndpointList" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference <a name="DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_cloudfront_realtime_log_config

dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig">kinesis_stream_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType">stream_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kinesis_stream_config`<sup>Required</sup> <a name="kinesis_stream_config" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.kinesisStreamConfig"></a>

```python
kinesis_stream_config: DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList">DataAwsCloudfrontRealtimeLogConfigEndpointKinesisStreamConfigList</a>

---

##### `stream_type`<sup>Required</sup> <a name="stream_type" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.streamType"></a>

```python
stream_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCloudfrontRealtimeLogConfigEndpoint
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCloudfrontRealtimeLogConfig.DataAwsCloudfrontRealtimeLogConfigEndpoint">DataAwsCloudfrontRealtimeLogConfigEndpoint</a>

---



