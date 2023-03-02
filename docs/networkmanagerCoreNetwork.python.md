# `networkmanagerCoreNetwork` Submodule <a name="`networkmanagerCoreNetwork` Submodule" id="@cdktf/provider-aws.networkmanagerCoreNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerCoreNetwork <a name="NetworkmanagerCoreNetwork" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network aws_networkmanager_core_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  base_policy_region: str = None,
  create_base_policy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  policy_document: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerCoreNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.basePolicyRegion">base_policy_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.createBasePolicy">create_base_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.globalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}.

---

##### `base_policy_region`<sup>Optional</sup> <a name="base_policy_region" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.basePolicyRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}.

---

##### `create_base_policy`<sup>Optional</sup> <a name="create_base_policy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.createBasePolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.policyDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion">reset_base_policy_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy">reset_create_base_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}.

---

##### `reset_base_policy_region` <a name="reset_base_policy_region" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetBasePolicyRegion"></a>

```python
def reset_base_policy_region() -> None
```

##### `reset_create_base_policy` <a name="reset_create_base_policy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetCreateBasePolicy"></a>

```python
def reset_create_base_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges">edges</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments">segments</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput">base_policy_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput">create_base_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput">global_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion">base_policy_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy">create_base_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edges`<sup>Required</sup> <a name="edges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.edges"></a>

```python
edges: NetworkmanagerCoreNetworkEdgesList
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList">NetworkmanagerCoreNetworkEdgesList</a>

---

##### `segments`<sup>Required</sup> <a name="segments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.segments"></a>

```python
segments: NetworkmanagerCoreNetworkSegmentsList
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList">NetworkmanagerCoreNetworkSegmentsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeouts"></a>

```python
timeouts: NetworkmanagerCoreNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference">NetworkmanagerCoreNetworkTimeoutsOutputReference</a>

---

##### `base_policy_region_input`<sup>Optional</sup> <a name="base_policy_region_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegionInput"></a>

```python
base_policy_region_input: str
```

- *Type:* str

---

##### `create_base_policy_input`<sup>Optional</sup> <a name="create_base_policy_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicyInput"></a>

```python
create_base_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_network_id_input`<sup>Optional</sup> <a name="global_network_id_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkIdInput"></a>

```python
global_network_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NetworkmanagerCoreNetworkTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>, cdktf.IResolvable]

---

##### `base_policy_region`<sup>Required</sup> <a name="base_policy_region" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.basePolicyRegion"></a>

```python
base_policy_region: str
```

- *Type:* str

---

##### `create_base_policy`<sup>Required</sup> <a name="create_base_policy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.createBasePolicy"></a>

```python
create_base_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerCoreNetworkConfig <a name="NetworkmanagerCoreNetworkConfig" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  global_network_id: str,
  base_policy_region: str = None,
  create_base_policy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  policy_document: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: NetworkmanagerCoreNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId">global_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion">base_policy_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy">create_base_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `global_network_id`<sup>Required</sup> <a name="global_network_id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.globalNetworkId"></a>

```python
global_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}.

---

##### `base_policy_region`<sup>Optional</sup> <a name="base_policy_region" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.basePolicyRegion"></a>

```python
base_policy_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}.

---

##### `create_base_policy`<sup>Optional</sup> <a name="create_base_policy" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.createBasePolicy"></a>

```python
create_base_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#policy_document NetworkmanagerCoreNetwork#policy_document}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkConfig.property.timeouts"></a>

```python
timeouts: NetworkmanagerCoreNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}

---

### NetworkmanagerCoreNetworkEdges <a name="NetworkmanagerCoreNetworkEdges" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges()
```


### NetworkmanagerCoreNetworkSegments <a name="NetworkmanagerCoreNetworkSegments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments()
```


### NetworkmanagerCoreNetworkTimeouts <a name="NetworkmanagerCoreNetworkTimeouts" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerCoreNetworkEdgesList <a name="NetworkmanagerCoreNetworkEdgesList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerCoreNetworkEdgesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkmanagerCoreNetworkEdgesOutputReference <a name="NetworkmanagerCoreNetworkEdgesOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks">inside_cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `inside_cidr_blocks`<sup>Required</sup> <a name="inside_cidr_blocks" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.insideCidrBlocks"></a>

```python
inside_cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdgesOutputReference.property.internalValue"></a>

```python
internal_value: NetworkmanagerCoreNetworkEdges
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkEdges">NetworkmanagerCoreNetworkEdges</a>

---


### NetworkmanagerCoreNetworkSegmentsList <a name="NetworkmanagerCoreNetworkSegmentsList" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerCoreNetworkSegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### NetworkmanagerCoreNetworkSegmentsOutputReference <a name="NetworkmanagerCoreNetworkSegmentsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations">edge_locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments">shared_segments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edge_locations`<sup>Required</sup> <a name="edge_locations" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.edgeLocations"></a>

```python
edge_locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `shared_segments`<sup>Required</sup> <a name="shared_segments" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.sharedSegments"></a>

```python
shared_segments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegmentsOutputReference.property.internalValue"></a>

```python
internal_value: NetworkmanagerCoreNetworkSegments
```

- *Type:* <a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkSegments">NetworkmanagerCoreNetworkSegments</a>

---


### NetworkmanagerCoreNetworkTimeoutsOutputReference <a name="NetworkmanagerCoreNetworkTimeoutsOutputReference" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import networkmanager_core_network

networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NetworkmanagerCoreNetworkTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.networkmanagerCoreNetwork.NetworkmanagerCoreNetworkTimeouts">NetworkmanagerCoreNetworkTimeouts</a>, cdktf.IResolvable]

---



