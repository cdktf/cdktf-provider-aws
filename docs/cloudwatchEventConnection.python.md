# `cloudwatchEventConnection` Submodule <a name="`cloudwatchEventConnection` Submodule" id="@cdktf/provider-aws.cloudwatchEventConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchEventConnection <a name="CloudwatchEventConnection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection aws_cloudwatch_event_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_type: str,
  auth_parameters: CloudwatchEventConnectionAuthParameters,
  name: str,
  description: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authParameters">auth_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authorizationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `auth_parameters`<sup>Required</sup> <a name="auth_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.authParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters">put_auth_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auth_parameters` <a name="put_auth_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters"></a>

```python
def put_auth_parameters(
  api_key: CloudwatchEventConnectionAuthParametersApiKey = None,
  basic: CloudwatchEventConnectionAuthParametersBasic = None,
  invocation_http_parameters: CloudwatchEventConnectionAuthParametersInvocationHttpParameters = None,
  oauth: CloudwatchEventConnectionAuthParametersOauth = None
) -> None
```

###### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.apiKey"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}

---

###### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.basic"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}

---

###### `invocation_http_parameters`<sup>Optional</sup> <a name="invocation_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.invocationHttpParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

invocation_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}

---

###### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.putAuthParameters.parameter.oauth"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters">auth_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput">authorization_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput">auth_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType">authorization_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auth_parameters`<sup>Required</sup> <a name="auth_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParameters"></a>

```python
auth_parameters: CloudwatchEventConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference">CloudwatchEventConnectionAuthParametersOutputReference</a>

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `authorization_type_input`<sup>Optional</sup> <a name="authorization_type_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationTypeInput"></a>

```python
authorization_type_input: str
```

- *Type:* str

---

##### `auth_parameters_input`<sup>Optional</sup> <a name="auth_parameters_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authParametersInput"></a>

```python
auth_parameters_input: CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchEventConnectionAuthParameters <a name="CloudwatchEventConnectionAuthParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters(
  api_key: CloudwatchEventConnectionAuthParametersApiKey = None,
  basic: CloudwatchEventConnectionAuthParametersBasic = None,
  invocation_http_parameters: CloudwatchEventConnectionAuthParametersInvocationHttpParameters = None,
  oauth: CloudwatchEventConnectionAuthParametersOauth = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey">api_key</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | api_key block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters">invocation_http_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | invocation_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | oauth block. |

---

##### `api_key`<sup>Optional</sup> <a name="api_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.apiKey"></a>

```python
api_key: CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

api_key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#api_key CloudwatchEventConnection#api_key}

---

##### `basic`<sup>Optional</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.basic"></a>

```python
basic: CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

basic block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#basic CloudwatchEventConnection#basic}

---

##### `invocation_http_parameters`<sup>Optional</sup> <a name="invocation_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.invocationHttpParameters"></a>

```python
invocation_http_parameters: CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

invocation_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}

---

##### `oauth`<sup>Optional</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters.property.oauth"></a>

```python
oauth: CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

oauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth CloudwatchEventConnection#oauth}

---

### CloudwatchEventConnectionAuthParametersApiKey <a name="CloudwatchEventConnectionAuthParametersApiKey" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersBasic <a name="CloudwatchEventConnectionAuthParametersBasic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParameters <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters(
  body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]] = None,
  header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]] = None,
  query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body">body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString">query_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]</code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.body"></a>

```python
body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters.property.queryString"></a>

```python
query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauth <a name="CloudwatchEventConnectionAuthParametersOauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth(
  authorization_endpoint: str,
  http_method: str,
  oauth_http_parameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters,
  client_parameters: CloudwatchEventConnectionAuthParametersOauthClientParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod">http_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters">oauth_http_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | oauth_http_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters">client_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | client_parameters block. |

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}.

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}.

---

##### `oauth_http_parameters`<sup>Required</sup> <a name="oauth_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.oauthHttpParameters"></a>

```python
oauth_http_parameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

oauth_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}

---

##### `client_parameters`<sup>Optional</sup> <a name="client_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth.property.clientParameters"></a>

```python
client_parameters: CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

client_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}

---

### CloudwatchEventConnectionAuthParametersOauthClientParameters <a name="CloudwatchEventConnectionAuthParametersOauthClientParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters(
  client_id: str,
  client_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters(
  body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]] = None,
  header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]] = None,
  query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body">body</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]</code> | body block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString">query_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]</code> | query_string block. |

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.body"></a>

```python
body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters.property.queryString"></a>

```python
query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString(
  is_value_secret: typing.Union[bool, IResolvable] = None,
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}. |

---

##### `is_value_secret`<sup>Optional</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#is_value_secret CloudwatchEventConnection#is_value_secret}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

### CloudwatchEventConnectionConfig <a name="CloudwatchEventConnectionConfig" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authorization_type: str,
  auth_parameters: CloudwatchEventConnectionAuthParameters,
  name: str,
  description: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType">authorization_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters">auth_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | auth_parameters block. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_type`<sup>Required</sup> <a name="authorization_type" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authorizationType"></a>

```python
authorization_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_type CloudwatchEventConnection#authorization_type}.

---

##### `auth_parameters`<sup>Required</sup> <a name="auth_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.authParameters"></a>

```python
auth_parameters: CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

auth_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#auth_parameters CloudwatchEventConnection#auth_parameters}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#name CloudwatchEventConnection#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#description CloudwatchEventConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#id CloudwatchEventConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchEventConnectionAuthParametersApiKeyOutputReference <a name="CloudwatchEventConnectionAuthParametersApiKeyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---


### CloudwatchEventConnectionAuthParametersBasicOutputReference <a name="CloudwatchEventConnectionAuthParametersBasicOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString">put_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody"></a>

```python
def put_body(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]

---

##### `put_header` <a name="put_header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]

---

##### `put_query_string` <a name="put_query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString"></a>

```python
def put_query_string(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput">body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput">query_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.body"></a>

```python
body: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.header"></a>

```python
header: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderList</a>

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryString"></a>

```python
query_string: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyInput"></a>

```python
body_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringInput"></a>

```python
query_string_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]

---


### CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody">put_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString">put_query_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody">reset_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_body` <a name="put_body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody"></a>

```python
def put_body(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putBody.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]

---

##### `put_header` <a name="put_header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]

---

##### `put_query_string` <a name="put_query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString"></a>

```python
def put_query_string(
  value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.putQueryString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]

---

##### `reset_body` <a name="reset_body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetBody"></a>

```python
def reset_body() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body">body</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString">query_string</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput">body_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput">query_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.body"></a>

```python
body: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyList</a>

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.header"></a>

```python
header: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderList</a>

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryString"></a>

```python
query_string: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList</a>

---

##### `body_input`<sup>Optional</sup> <a name="body_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.bodyInput"></a>

```python
body_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.queryStringInput"></a>

```python
query_string_input: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]

---


### CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret">reset_is_value_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_value_secret` <a name="reset_is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetIsValueSecret"></a>

```python
def reset_is_value_secret() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput">is_value_secret_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret">is_value_secret</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_value_secret_input`<sup>Optional</sup> <a name="is_value_secret_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecretInput"></a>

```python
is_value_secret_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `is_value_secret`<sup>Required</sup> <a name="is_value_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.isValueSecret"></a>

```python
is_value_secret: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>, cdktf.IResolvable]

---


### CloudwatchEventConnectionAuthParametersOauthOutputReference <a name="CloudwatchEventConnectionAuthParametersOauthOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters">put_client_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters">put_oauth_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters">reset_client_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_parameters` <a name="put_client_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters"></a>

```python
def put_client_parameters(
  client_id: str,
  client_secret: str
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_id CloudwatchEventConnection#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putClientParameters.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_secret CloudwatchEventConnection#client_secret}.

---

##### `put_oauth_http_parameters` <a name="put_oauth_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters"></a>

```python
def put_oauth_http_parameters(
  body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody]] = None,
  header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader]] = None,
  query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString]] = None
) -> None
```

###### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.body"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody</a>]]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.putOauthHttpParameters.parameter.queryString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString</a>]]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

##### `reset_client_parameters` <a name="reset_client_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.resetClientParameters"></a>

```python
def reset_client_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters">client_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters">oauth_http_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput">client_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput">http_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput">oauth_http_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod">http_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_parameters`<sup>Required</sup> <a name="client_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParameters"></a>

```python
client_parameters: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference</a>

---

##### `oauth_http_parameters`<sup>Required</sup> <a name="oauth_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParameters"></a>

```python
oauth_http_parameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference</a>

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_parameters_input`<sup>Optional</sup> <a name="client_parameters_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.clientParametersInput"></a>

```python
client_parameters_input: CloudwatchEventConnectionAuthParametersOauthClientParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

---

##### `http_method_input`<sup>Optional</sup> <a name="http_method_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethodInput"></a>

```python
http_method_input: str
```

- *Type:* str

---

##### `oauth_http_parameters_input`<sup>Optional</sup> <a name="oauth_http_parameters_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.oauthHttpParametersInput"></a>

```python
oauth_http_parameters_input: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.httpMethod"></a>

```python
http_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---


### CloudwatchEventConnectionAuthParametersOutputReference <a name="CloudwatchEventConnectionAuthParametersOutputReference" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudwatch_event_connection

cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey">put_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic">put_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters">put_invocation_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth">put_oauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey">reset_api_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic">reset_basic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters">reset_invocation_http_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth">reset_oauth</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_api_key` <a name="put_api_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey"></a>

```python
def put_api_key(
  key: str,
  value: str
) -> None
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#key CloudwatchEventConnection#key}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putApiKey.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#value CloudwatchEventConnection#value}.

---

##### `put_basic` <a name="put_basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic"></a>

```python
def put_basic(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#password CloudwatchEventConnection#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putBasic.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#username CloudwatchEventConnection#username}.

---

##### `put_invocation_http_parameters` <a name="put_invocation_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```python
def put_invocation_http_parameters(
  body: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody]] = None,
  header: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader]] = None,
  query_string: typing.Union[IResolvable, typing.List[CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString]] = None
) -> None
```

###### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.body"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody">CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody</a>]]

body block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#body CloudwatchEventConnection#body}

---

###### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.header"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader">CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#header CloudwatchEventConnection#header}

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.queryString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString">CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString</a>]]

query_string block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#query_string CloudwatchEventConnection#query_string}

---

##### `put_oauth` <a name="put_oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth"></a>

```python
def put_oauth(
  authorization_endpoint: str,
  http_method: str,
  oauth_http_parameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters,
  client_parameters: CloudwatchEventConnectionAuthParametersOauthClientParameters = None
) -> None
```

###### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}.

---

###### `http_method`<sup>Required</sup> <a name="http_method" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.httpMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#http_method CloudwatchEventConnection#http_method}.

---

###### `oauth_http_parameters`<sup>Required</sup> <a name="oauth_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.oauthHttpParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters">CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters</a>

oauth_http_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}

---

###### `client_parameters`<sup>Optional</sup> <a name="client_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.putOauth.parameter.clientParameters"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthClientParameters">CloudwatchEventConnectionAuthParametersOauthClientParameters</a>

client_parameters block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection#client_parameters CloudwatchEventConnection#client_parameters}

---

##### `reset_api_key` <a name="reset_api_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetApiKey"></a>

```python
def reset_api_key() -> None
```

##### `reset_basic` <a name="reset_basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetBasic"></a>

```python
def reset_basic() -> None
```

##### `reset_invocation_http_parameters` <a name="reset_invocation_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```python
def reset_invocation_http_parameters() -> None
```

##### `reset_oauth` <a name="reset_oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.resetOauth"></a>

```python
def reset_oauth() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey">api_key</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic">basic</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters">invocation_http_parameters</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth">oauth</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput">api_key_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput">basic_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">invocation_http_parameters_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput">oauth_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKey"></a>

```python
api_key: CloudwatchEventConnectionAuthParametersApiKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKeyOutputReference">CloudwatchEventConnectionAuthParametersApiKeyOutputReference</a>

---

##### `basic`<sup>Required</sup> <a name="basic" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basic"></a>

```python
basic: CloudwatchEventConnectionAuthParametersBasicOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasicOutputReference">CloudwatchEventConnectionAuthParametersBasicOutputReference</a>

---

##### `invocation_http_parameters`<sup>Required</sup> <a name="invocation_http_parameters" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```python
invocation_http_parameters: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference">CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `oauth`<sup>Required</sup> <a name="oauth" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauth"></a>

```python
oauth: CloudwatchEventConnectionAuthParametersOauthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauthOutputReference">CloudwatchEventConnectionAuthParametersOauthOutputReference</a>

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.apiKeyInput"></a>

```python
api_key_input: CloudwatchEventConnectionAuthParametersApiKey
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersApiKey">CloudwatchEventConnectionAuthParametersApiKey</a>

---

##### `basic_input`<sup>Optional</sup> <a name="basic_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.basicInput"></a>

```python
basic_input: CloudwatchEventConnectionAuthParametersBasic
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersBasic">CloudwatchEventConnectionAuthParametersBasic</a>

---

##### `invocation_http_parameters_input`<sup>Optional</sup> <a name="invocation_http_parameters_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```python
invocation_http_parameters_input: CloudwatchEventConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersInvocationHttpParameters">CloudwatchEventConnectionAuthParametersInvocationHttpParameters</a>

---

##### `oauth_input`<sup>Optional</sup> <a name="oauth_input" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.oauthInput"></a>

```python
oauth_input: CloudwatchEventConnectionAuthParametersOauth
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOauth">CloudwatchEventConnectionAuthParametersOauth</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParametersOutputReference.property.internalValue"></a>

```python
internal_value: CloudwatchEventConnectionAuthParameters
```

- *Type:* <a href="#@cdktf/provider-aws.cloudwatchEventConnection.CloudwatchEventConnectionAuthParameters">CloudwatchEventConnectionAuthParameters</a>

---



