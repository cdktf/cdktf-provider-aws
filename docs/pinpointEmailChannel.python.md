# `pinpointEmailChannel` Submodule <a name="`pinpointEmailChannel` Submodule" id="@cdktf/provider-aws.pinpointEmailChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailChannel <a name="PinpointEmailChannel" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel aws_pinpoint_email_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_channel

pinpointEmailChannel.PinpointEmailChannel(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  from_address: str,
  identity: str,
  configuration_set: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  role_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.fromAddress">from_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.identity">identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#identity PinpointEmailChannel#identity}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.configurationSet">configuration_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#id PinpointEmailChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}.

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.fromAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.identity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#identity PinpointEmailChannel#identity}.

---

##### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.configurationSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#id PinpointEmailChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet">reset_configuration_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_configuration_set` <a name="reset_configuration_set" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetConfigurationSet"></a>

```python
def reset_configuration_set() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_channel

pinpointEmailChannel.PinpointEmailChannel.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_channel

pinpointEmailChannel.PinpointEmailChannel.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_channel

pinpointEmailChannel.PinpointEmailChannel.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond">messages_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput">configuration_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput">from_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet">configuration_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress">from_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `messages_per_second`<sup>Required</sup> <a name="messages_per_second" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.messagesPerSecond"></a>

```python
messages_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `configuration_set_input`<sup>Optional</sup> <a name="configuration_set_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSetInput"></a>

```python
configuration_set_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_address_input`<sup>Optional</sup> <a name="from_address_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddressInput"></a>

```python
from_address_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `configuration_set`<sup>Required</sup> <a name="configuration_set" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannel.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailChannelConfig <a name="PinpointEmailChannelConfig" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import pinpoint_email_channel

pinpointEmailChannel.PinpointEmailChannelConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_id: str,
  from_address: str,
  identity: str,
  configuration_set: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress">from_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity">identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#identity PinpointEmailChannel#identity}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet">configuration_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#id PinpointEmailChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#application_id PinpointEmailChannel#application_id}.

---

##### `from_address`<sup>Required</sup> <a name="from_address" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.fromAddress"></a>

```python
from_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#from_address PinpointEmailChannel#from_address}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.identity"></a>

```python
identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#identity PinpointEmailChannel#identity}.

---

##### `configuration_set`<sup>Optional</sup> <a name="configuration_set" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.configurationSet"></a>

```python
configuration_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#configuration_set PinpointEmailChannel#configuration_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#enabled PinpointEmailChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#id PinpointEmailChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.pinpointEmailChannel.PinpointEmailChannelConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_email_channel#role_arn PinpointEmailChannel#role_arn}.

---



