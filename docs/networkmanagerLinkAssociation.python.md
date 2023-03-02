# `networkmanagerLinkAssociation` Submodule <a name="`networkmanagerLinkAssociation` Submodule" id="@cdktf/provider-aws.networkmanagerLinkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerLinkAssociation <a name="NetworkmanagerLinkAssociation" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association aws_networkmanager_link_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str,
  global_network_id: str,
  link_id: str,
  id: str = None,
  timeouts: NetworkmanagerLinkAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#device_id NetworkmanagerLinkAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#global_network_id NetworkmanagerLinkAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#link_id NetworkmanagerLinkAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#id NetworkmanagerLinkAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.deviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#device_id NetworkmanagerLinkAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#global_network_id NetworkmanagerLinkAssociation#global_network_id}.

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.linkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#link_id NetworkmanagerLinkAssociation#link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#id NetworkmanagerLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#timeouts NetworkmanagerLinkAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#create NetworkmanagerLinkAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#delete NetworkmanagerLinkAssociation#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference">NetworkmanagerLinkAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.deviceIdInput">device_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.linkIdInput">link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.deviceId">device_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.timeouts"></a>

```python
timeouts: NetworkmanagerLinkAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference">NetworkmanagerLinkAssociationTimeoutsOutputReference</a>

---

##### `device_id_input`<sup>Optional</sup> <a name="device_id_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.deviceIdInput"></a>

```python
device_id_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_id_input`<sup>Optional</sup> <a name="link_id_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.linkIdInput"></a>

```python
link_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerLinkAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerLinkAssociationConfig <a name="NetworkmanagerLinkAssociationConfig" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  device_id: str,
  global_network_id: str,
  link_id: str,
  id: str = None,
  timeouts: NetworkmanagerLinkAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.deviceId">device_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#device_id NetworkmanagerLinkAssociation#device_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#global_network_id NetworkmanagerLinkAssociation#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.linkId">link_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#link_id NetworkmanagerLinkAssociation#link_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#id NetworkmanagerLinkAssociation#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `device_id`<sup>Required</sup> <a name="device_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.deviceId"></a>

```python
device_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#device_id NetworkmanagerLinkAssociation#device_id}.

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#global_network_id NetworkmanagerLinkAssociation#global_network_id}.

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#link_id NetworkmanagerLinkAssociation#link_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#id NetworkmanagerLinkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerLinkAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#timeouts NetworkmanagerLinkAssociation#timeouts}

---

### NetworkmanagerLinkAssociationTimeouts <a name="NetworkmanagerLinkAssociationTimeouts" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#create NetworkmanagerLinkAssociation#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#delete NetworkmanagerLinkAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#create NetworkmanagerLinkAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_link_association#delete NetworkmanagerLinkAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerLinkAssociationTimeoutsOutputReference <a name="NetworkmanagerLinkAssociationTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_link_association

networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerLinkAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerLinkAssociation.NetworkmanagerLinkAssociationTimeouts">NetworkmanagerLinkAssociationTimeouts</a>, cdktf.IResolvable]

---



