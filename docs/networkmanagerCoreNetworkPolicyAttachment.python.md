# `networkmanagerCoreNetworkPolicyAttachment` Submodule <a name="`networkmanagerCoreNetworkPolicyAttachment` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetworkPolicyAttachment <a name="NetworkmanagerCoreNetworkPolicyAttachment" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  policy_document: str,
  id: str = None,
  timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.policyDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeouts"></a>

```python
timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference">NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference</a>

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerCoreNetworkPolicyAttachmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>, cdktf.IResolvable]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentConfig <a name="NetworkmanagerCoreNetworkPolicyAttachmentConfig" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  core_network_id: str,
  policy_document: str,
  id: str = None,
  timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}.

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}

---

### NetworkmanagerCoreNetworkPolicyAttachmentTimeouts <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network_policy_attachment

networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerCoreNetworkPolicyAttachmentTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetworkPolicyAttachment.NetworkmanagerCoreNetworkPolicyAttachmentTimeouts">NetworkmanagerCoreNetworkPolicyAttachmentTimeouts</a>, cdktf.IResolvable]

---



