# `cloudwatchLogMetricFilter` Submodule <a name="`cloudwatchLogMetricFilter` Submodule" id="@cdktf/provider-aws.cloudwatchLogMetricFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogMetricFilter <a name="CloudwatchLogMetricFilter" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter aws_cloudwatch_log_metric_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_group_name: str,
  metric_transformation: CloudwatchLogMetricFilterMetricTransformation,
  name: str,
  pattern: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.metricTransformation">metric_transformation</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | metric_transformation block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}.

---

##### `metric_transformation`<sup>Required</sup> <a name="metric_transformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.metricTransformation"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

metric_transformation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.pattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation">put_metric_transformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metric_transformation` <a name="put_metric_transformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation"></a>

```python
def put_metric_transformation(
  name: str,
  namespace: str,
  value: str,
  default_value: str = None,
  dimensions: typing.Mapping[str] = None,
  unit: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}.

---

###### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.defaultValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}.

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}.

---

###### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.putMetricTransformation.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation">metric_transformation</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput">metric_transformation_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metric_transformation`<sup>Required</sup> <a name="metric_transformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformation"></a>

```python
metric_transformation: CloudwatchLogMetricFilterMetricTransformationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference">CloudwatchLogMetricFilterMetricTransformationOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `metric_transformation_input`<sup>Optional</sup> <a name="metric_transformation_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.metricTransformationInput"></a>

```python
metric_transformation_input: CloudwatchLogMetricFilterMetricTransformation
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogMetricFilterConfig <a name="CloudwatchLogMetricFilterConfig" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  log_group_name: str,
  metric_transformation: CloudwatchLogMetricFilterMetricTransformation,
  name: str,
  pattern: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation">metric_transformation</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | metric_transformation block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}.

---

##### `metric_transformation`<sup>Required</sup> <a name="metric_transformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.metricTransformation"></a>

```python
metric_transformation: CloudwatchLogMetricFilterMetricTransformation
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

metric_transformation block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CloudwatchLogMetricFilterMetricTransformation <a name="CloudwatchLogMetricFilterMetricTransformation" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation(
  name: str,
  namespace: str,
  value: str,
  default_value: str = None,
  dimensions: typing.Mapping[str] = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue">default_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}.

---

##### `default_value`<sup>Optional</sup> <a name="default_value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogMetricFilterMetricTransformationOutputReference <a name="CloudwatchLogMetricFilterMetricTransformationOutputReference" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_metric_filter

cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue">reset_default_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_value` <a name="reset_default_value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDefaultValue"></a>

```python
def reset_default_value() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput">default_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue">default_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value_input`<sup>Optional</sup> <a name="default_value_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValueInput"></a>

```python
default_value_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.defaultValue"></a>

```python
default_value: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformationOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchLogMetricFilterMetricTransformation
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchLogMetricFilter.CloudwatchLogMetricFilterMetricTransformation">CloudwatchLogMetricFilterMetricTransformation</a>

---



