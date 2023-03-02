# `cloudwatchLogSubscriptionFilter` Submodule <a name="`cloudwatchLogSubscriptionFilter` Submodule" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogSubscriptionFilter <a name="CloudwatchLogSubscriptionFilter" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter aws_cloudwatch_log_subscription_filter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_subscription_filter

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_arn: str,
  filter_pattern: str,
  log_group_name: str,
  name: str,
  distribution: str = None,
  id: str = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.filterPattern">filter_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.distribution">distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.destinationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}.

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.filterPattern"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.logGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.distribution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution">reset_distribution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_distribution` <a name="reset_distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetDistribution"></a>

```python
def reset_distribution() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_subscription_filter

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_subscription_filter

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_subscription_filter

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput">destination_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput">distribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput">filter_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput">log_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution">distribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern">filter_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName">log_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_arn_input`<sup>Optional</sup> <a name="destination_arn_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArnInput"></a>

```python
destination_arn_input: str
```

- *Type:* str

---

##### `distribution_input`<sup>Optional</sup> <a name="distribution_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distributionInput"></a>

```python
distribution_input: str
```

- *Type:* str

---

##### `filter_pattern_input`<sup>Optional</sup> <a name="filter_pattern_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPatternInput"></a>

```python
filter_pattern_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_group_name_input`<sup>Optional</sup> <a name="log_group_name_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupNameInput"></a>

```python
log_group_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogSubscriptionFilterConfig <a name="CloudwatchLogSubscriptionFilterConfig" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_log_subscription_filter

cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_arn: str,
  filter_pattern: str,
  log_group_name: str,
  name: str,
  distribution: str = None,
  id: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn">destination_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern">filter_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName">log_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution">distribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#destination_arn CloudwatchLogSubscriptionFilter#destination_arn}.

---

##### `filter_pattern`<sup>Required</sup> <a name="filter_pattern" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.filterPattern"></a>

```python
filter_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#filter_pattern CloudwatchLogSubscriptionFilter#filter_pattern}.

---

##### `log_group_name`<sup>Required</sup> <a name="log_group_name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.logGroupName"></a>

```python
log_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#log_group_name CloudwatchLogSubscriptionFilter#log_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#name CloudwatchLogSubscriptionFilter#name}.

---

##### `distribution`<sup>Optional</sup> <a name="distribution" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.distribution"></a>

```python
distribution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#distribution CloudwatchLogSubscriptionFilter#distribution}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#id CloudwatchLogSubscriptionFilter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.cloudwatchLogSubscriptionFilter.CloudwatchLogSubscriptionFilterConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_log_subscription_filter#role_arn CloudwatchLogSubscriptionFilter#role_arn}.

---



