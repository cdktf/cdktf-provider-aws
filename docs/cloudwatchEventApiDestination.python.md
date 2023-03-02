# `cloudwatchEventApiDestination` Submodule <a name="`cloudwatchEventApiDestination` Submodule" id="@cdktf/provider-aws.cloudwatchEventApiDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventApiDestination <a name="CloudwatchEventApiDestination" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination aws_cloudwatch_event_api_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_api_destination

cloudwatchEventApiDestination.CloudwatchEventApiDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_arn: str,
  http_method: str,
  invocation_endpoint: str,
  name: str,
  description: str = None,
  id: str = None,
  invocation_rate_limit_per_second: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.connectionArn">connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.invocationEndpoint">invocation_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.invocationRateLimitPerSecond">invocation_rate_limit_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.connectionArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}.

---

##### `invocation_endpoint`<sup>Required</sup> <a name="invocation_endpoint" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.invocationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocation_rate_limit_per_second`<sup>Optional</sup> <a name="invocation_rate_limit_per_second" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.Initializer.parameter.invocationRateLimitPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetInvocationRateLimitPerSecond">reset_invocation_rate_limit_per_second</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_invocation_rate_limit_per_second` <a name="reset_invocation_rate_limit_per_second" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.resetInvocationRateLimitPerSecond"></a>

```python
def reset_invocation_rate_limit_per_second() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_api_destination

cloudwatchEventApiDestination.CloudwatchEventApiDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_api_destination

cloudwatchEventApiDestination.CloudwatchEventApiDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_api_destination

cloudwatchEventApiDestination.CloudwatchEventApiDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArnInput">connection_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpointInput">invocation_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecondInput">invocation_rate_limit_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArn">connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpoint">invocation_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecond">invocation_rate_limit_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `connection_arn_input`<sup>Optional</sup> <a name="connection_arn_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArnInput"></a>

```python
connection_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invocation_endpoint_input`<sup>Optional</sup> <a name="invocation_endpoint_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpointInput"></a>

```python
invocation_endpoint_input: str
```

- *Type:* str

---

##### `invocation_rate_limit_per_second_input`<sup>Optional</sup> <a name="invocation_rate_limit_per_second_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecondInput"></a>

```python
invocation_rate_limit_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invocation_endpoint`<sup>Required</sup> <a name="invocation_endpoint" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationEndpoint"></a>

```python
invocation_endpoint: str
```

- *Type:* str

---

##### `invocation_rate_limit_per_second`<sup>Required</sup> <a name="invocation_rate_limit_per_second" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.invocationRateLimitPerSecond"></a>

```python
invocation_rate_limit_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventApiDestinationConfig <a name="CloudwatchEventApiDestinationConfig" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_api_destination

cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_arn: str,
  http_method: str,
  invocation_endpoint: str,
  name: str,
  description: str = None,
  id: str = None,
  invocation_rate_limit_per_second: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connectionArn">connection_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationEndpoint">invocation_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationRateLimitPerSecond">invocation_rate_limit_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_arn`<sup>Required</sup> <a name="connection_arn" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.connectionArn"></a>

```python
connection_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#connection_arn CloudwatchEventApiDestination#connection_arn}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#http_method CloudwatchEventApiDestination#http_method}.

---

##### `invocation_endpoint`<sup>Required</sup> <a name="invocation_endpoint" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationEndpoint"></a>

```python
invocation_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#name CloudwatchEventApiDestination#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#description CloudwatchEventApiDestination#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#id CloudwatchEventApiDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `invocation_rate_limit_per_second`<sup>Optional</sup> <a name="invocation_rate_limit_per_second" id="@cdktf/provider-aws.cloudwatchEventApiDestination.CloudwatchEventApiDestinationConfig.property.invocationRateLimitPerSecond"></a>

```python
invocation_rate_limit_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}.

---



