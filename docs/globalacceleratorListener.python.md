# `globalacceleratorListener` Submodule <a name="`globalacceleratorListener` Submodule" id="@cdktf/provider-aws.globalacceleratorListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorListener <a name="GlobalacceleratorListener" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener aws_globalaccelerator_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerator_arn: str,
  port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]],
  protocol: str,
  client_affinity: str = None,
  id: str = None,
  timeouts: GlobalacceleratorListenerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.portRange">port_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.clientAffinity">client_affinity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#id GlobalacceleratorListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.acceleratorArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}.

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.portRange"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]

port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#port_range GlobalacceleratorListener#port_range}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}.

---

##### `client_affinity`<sup>Optional</sup> <a name="client_affinity" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.clientAffinity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#id GlobalacceleratorListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#timeouts GlobalacceleratorListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange">put_port_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity">reset_client_affinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_port_range` <a name="put_port_range" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange"></a>

```python
def put_port_range(
  value: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putPortRange.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#create GlobalacceleratorListener#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#delete GlobalacceleratorListener#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#update GlobalacceleratorListener#update}.

---

##### `reset_client_affinity` <a name="reset_client_affinity" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetClientAffinity"></a>

```python
def reset_client_affinity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRange">port_range</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList">GlobalacceleratorListenerPortRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference">GlobalacceleratorListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput">accelerator_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput">client_affinity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRangeInput">port_range_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity">client_affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRange"></a>

```python
port_range: GlobalacceleratorListenerPortRangeList
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList">GlobalacceleratorListenerPortRangeList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeouts"></a>

```python
timeouts: GlobalacceleratorListenerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference">GlobalacceleratorListenerTimeoutsOutputReference</a>

---

##### `accelerator_arn_input`<sup>Optional</sup> <a name="accelerator_arn_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArnInput"></a>

```python
accelerator_arn_input: str
```

- *Type:* str

---

##### `client_affinity_input`<sup>Optional</sup> <a name="client_affinity_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinityInput"></a>

```python
client_affinity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.portRangeInput"></a>

```python
port_range_input: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[GlobalacceleratorListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>, cdktf.IResolvable]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.acceleratorArn"></a>

```python
accelerator_arn: str
```

- *Type:* str

---

##### `client_affinity`<sup>Required</sup> <a name="client_affinity" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.clientAffinity"></a>

```python
client_affinity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorListenerConfig <a name="GlobalacceleratorListenerConfig" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  accelerator_arn: str,
  port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]],
  protocol: str,
  client_affinity: str = None,
  id: str = None,
  timeouts: GlobalacceleratorListenerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn">accelerator_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRange">port_range</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]</code> | port_range block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity">client_affinity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#id GlobalacceleratorListener#id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accelerator_arn`<sup>Required</sup> <a name="accelerator_arn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.acceleratorArn"></a>

```python
accelerator_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}.

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.portRange"></a>

```python
port_range: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]

port_range block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#port_range GlobalacceleratorListener#port_range}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}.

---

##### `client_affinity`<sup>Optional</sup> <a name="client_affinity" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.clientAffinity"></a>

```python
client_affinity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#id GlobalacceleratorListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerConfig.property.timeouts"></a>

```python
timeouts: GlobalacceleratorListenerTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#timeouts GlobalacceleratorListener#timeouts}

---

### GlobalacceleratorListenerPortRange <a name="GlobalacceleratorListenerPortRange" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerPortRange(
  from_port: typing.Union[int, float] = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}. |

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}.

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}.

---

### GlobalacceleratorListenerTimeouts <a name="GlobalacceleratorListenerTimeouts" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#create GlobalacceleratorListener#create}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#delete GlobalacceleratorListener#delete}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#update GlobalacceleratorListener#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#create GlobalacceleratorListener#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#delete GlobalacceleratorListener#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener#update GlobalacceleratorListener#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorListenerPortRangeList <a name="GlobalacceleratorListenerPortRangeList" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerPortRangeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlobalacceleratorListenerPortRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GlobalacceleratorListenerPortRange]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>]]

---


### GlobalacceleratorListenerPortRangeOutputReference <a name="GlobalacceleratorListenerPortRangeOutputReference" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_from_port` <a name="reset_from_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalacceleratorListenerPortRange, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerPortRange">GlobalacceleratorListenerPortRange</a>, cdktf.IResolvable]

---


### GlobalacceleratorListenerTimeoutsOutputReference <a name="GlobalacceleratorListenerTimeoutsOutputReference" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import globalaccelerator_listener

globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GlobalacceleratorListenerTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.globalacceleratorListener.GlobalacceleratorListenerTimeouts">GlobalacceleratorListenerTimeouts</a>, cdktf.IResolvable]

---



