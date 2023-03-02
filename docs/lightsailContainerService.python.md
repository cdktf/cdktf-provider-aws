# `lightsailContainerService` Submodule <a name="`lightsailContainerService` Submodule" id="@cdktf/provider-aws.lightsailContainerService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainerService <a name="LightsailContainerService" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service aws_lightsail_container_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerService(
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
  power: str,
  scale: typing.Union[int, float],
  id: str = None,
  is_disabled: typing.Union[bool, IResolvable] = None,
  private_registry_access: LightsailContainerServicePrivateRegistryAccess = None,
  public_domain_names: LightsailContainerServicePublicDomainNames = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LightsailContainerServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.power">power</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scale">scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.publicDomainNames">public_domain_names</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.power"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.scale"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.isDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `private_registry_access`<sup>Optional</sup> <a name="private_registry_access" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.privateRegistryAccess"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `public_domain_names`<sup>Optional</sup> <a name="public_domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.publicDomainNames"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess">put_private_registry_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames">put_public_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled">reset_is_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess">reset_private_registry_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames">reset_public_domain_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_private_registry_access` <a name="put_private_registry_access" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess"></a>

```python
def put_private_registry_access(
  ecr_image_puller_role: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole = None
) -> None
```

###### `ecr_image_puller_role`<sup>Optional</sup> <a name="ecr_image_puller_role" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPrivateRegistryAccess.parameter.ecrImagePullerRole"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

##### `put_public_domain_names` <a name="put_public_domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames"></a>

```python
def put_public_domain_names(
  certificate: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
) -> None
```

###### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putPublicDomainNames.parameter.certificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_disabled` <a name="reset_is_disabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetIsDisabled"></a>

```python
def reset_is_disabled() -> None
```

##### `reset_private_registry_access` <a name="reset_private_registry_access" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPrivateRegistryAccess"></a>

```python
def reset_private_registry_access() -> None
```

##### `reset_public_domain_names` <a name="reset_public_domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetPublicDomainNames"></a>

```python
def reset_public_domain_names() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId">power_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName">private_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames">public_domain_names</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput">is_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput">power_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput">private_registry_access_input</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput">public_domain_names_input</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput">scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power">power</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `power_id`<sup>Required</sup> <a name="power_id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerId"></a>

```python
power_id: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `private_domain_name`<sup>Required</sup> <a name="private_domain_name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateDomainName"></a>

```python
private_domain_name: str
```

- *Type:* str

---

##### `private_registry_access`<sup>Required</sup> <a name="private_registry_access" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccess"></a>

```python
private_registry_access: LightsailContainerServicePrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference">LightsailContainerServicePrivateRegistryAccessOutputReference</a>

---

##### `public_domain_names`<sup>Required</sup> <a name="public_domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNames"></a>

```python
public_domain_names: LightsailContainerServicePublicDomainNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference">LightsailContainerServicePublicDomainNamesOutputReference</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeouts"></a>

```python
timeouts: LightsailContainerServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference">LightsailContainerServiceTimeoutsOutputReference</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_disabled_input`<sup>Optional</sup> <a name="is_disabled_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabledInput"></a>

```python
is_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `power_input`<sup>Optional</sup> <a name="power_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.powerInput"></a>

```python
power_input: str
```

- *Type:* str

---

##### `private_registry_access_input`<sup>Optional</sup> <a name="private_registry_access_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.privateRegistryAccessInput"></a>

```python
private_registry_access_input: LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---

##### `public_domain_names_input`<sup>Optional</sup> <a name="public_domain_names_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.publicDomainNamesInput"></a>

```python
public_domain_names_input: LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---

##### `scale_input`<sup>Optional</sup> <a name="scale_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scaleInput"></a>

```python
scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LightsailContainerServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_disabled`<sup>Required</sup> <a name="is_disabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.power"></a>

```python
power: str
```

- *Type:* str

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerServiceConfig <a name="LightsailContainerServiceConfig" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  power: str,
  scale: typing.Union[int, float],
  id: str = None,
  is_disabled: typing.Union[bool, IResolvable] = None,
  private_registry_access: LightsailContainerServicePrivateRegistryAccess = None,
  public_domain_names: LightsailContainerServicePublicDomainNames = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LightsailContainerServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power">power</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale">scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled">is_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess">private_registry_access</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | private_registry_access block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames">public_domain_names</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | public_domain_names block. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#name LightsailContainerService#name}.

---

##### `power`<sup>Required</sup> <a name="power" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.power"></a>

```python
power: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#power LightsailContainerService#power}.

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.scale"></a>

```python
scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#scale LightsailContainerService#scale}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#id LightsailContainerService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_disabled`<sup>Optional</sup> <a name="is_disabled" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.isDisabled"></a>

```python
is_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_disabled LightsailContainerService#is_disabled}.

---

##### `private_registry_access`<sup>Optional</sup> <a name="private_registry_access" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.privateRegistryAccess"></a>

```python
private_registry_access: LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

private_registry_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#private_registry_access LightsailContainerService#private_registry_access}

---

##### `public_domain_names`<sup>Optional</sup> <a name="public_domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.publicDomainNames"></a>

```python
public_domain_names: LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

public_domain_names block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#public_domain_names LightsailContainerService#public_domain_names}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags LightsailContainerService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#tags_all LightsailContainerService#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceConfig.property.timeouts"></a>

```python
timeouts: LightsailContainerServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#timeouts LightsailContainerService#timeouts}

---

### LightsailContainerServicePrivateRegistryAccess <a name="LightsailContainerServicePrivateRegistryAccess" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePrivateRegistryAccess(
  ecr_image_puller_role: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole">ecr_image_puller_role</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | ecr_image_puller_role block. |

---

##### `ecr_image_puller_role`<sup>Optional</sup> <a name="ecr_image_puller_role" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess.property.ecrImagePullerRole"></a>

```python
ecr_image_puller_role: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

ecr_image_puller_role block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#ecr_image_puller_role LightsailContainerService#ecr_image_puller_role}

---

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole(
  is_active: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}. |

---

##### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

### LightsailContainerServicePublicDomainNames <a name="LightsailContainerServicePublicDomainNames" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePublicDomainNames(
  certificate: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate">certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]</code> | certificate block. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames.property.certificate"></a>

```python
certificate: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]

certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate LightsailContainerService#certificate}

---

### LightsailContainerServicePublicDomainNamesCertificate <a name="LightsailContainerServicePublicDomainNamesCertificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate(
  certificate_name: str,
  domain_names: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName">certificate_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}. |

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#certificate_name LightsailContainerService#certificate_name}.

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#domain_names LightsailContainerService#domain_names}.

---

### LightsailContainerServiceTimeouts <a name="LightsailContainerServiceTimeouts" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#create LightsailContainerService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#delete LightsailContainerService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#update LightsailContainerService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">reset_is_active</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_active` <a name="reset_is_active" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```python
def reset_is_active() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">principal_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">is_active_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">is_active</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_arn`<sup>Required</sup> <a name="principal_arn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```python
principal_arn: str
```

- *Type:* str

---

##### `is_active_input`<sup>Optional</sup> <a name="is_active_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```python
is_active_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```python
is_active: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```python
internal_value: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---


### LightsailContainerServicePrivateRegistryAccessOutputReference <a name="LightsailContainerServicePrivateRegistryAccessOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole">put_ecr_image_puller_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole">reset_ecr_image_puller_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ecr_image_puller_role` <a name="put_ecr_image_puller_role" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```python
def put_ecr_image_puller_role(
  is_active: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_active`<sup>Optional</sup> <a name="is_active" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.isActive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_container_service#is_active LightsailContainerService#is_active}.

---

##### `reset_ecr_image_puller_role` <a name="reset_ecr_image_puller_role" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```python
def reset_ecr_image_puller_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole">ecr_image_puller_role</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">ecr_image_puller_role_input</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ecr_image_puller_role`<sup>Required</sup> <a name="ecr_image_puller_role" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```python
ecr_image_puller_role: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `ecr_image_puller_role_input`<sup>Optional</sup> <a name="ecr_image_puller_role_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```python
ecr_image_puller_role_input: LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole">LightsailContainerServicePrivateRegistryAccessEcrImagePullerRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccessOutputReference.property.internalValue"></a>

```python
internal_value: LightsailContainerServicePrivateRegistryAccess
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePrivateRegistryAccess">LightsailContainerServicePrivateRegistryAccess</a>

---


### LightsailContainerServicePublicDomainNamesCertificateList <a name="LightsailContainerServicePublicDomainNamesCertificateList" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailContainerServicePublicDomainNamesCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]

---


### LightsailContainerServicePublicDomainNamesCertificateOutputReference <a name="LightsailContainerServicePublicDomainNamesCertificateOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput">certificate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput">domain_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames">domain_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_name_input`<sup>Optional</sup> <a name="certificate_name_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateNameInput"></a>

```python
certificate_name_input: str
```

- *Type:* str

---

##### `domain_names_input`<sup>Optional</sup> <a name="domain_names_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNamesInput"></a>

```python
domain_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `domain_names`<sup>Required</sup> <a name="domain_names" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.domainNames"></a>

```python
domain_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LightsailContainerServicePublicDomainNamesCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>, cdktf.IResolvable]

---


### LightsailContainerServicePublicDomainNamesOutputReference <a name="LightsailContainerServicePublicDomainNamesOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate">put_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate` <a name="put_certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate"></a>

```python
def put_certificate(
  value: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.putCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput">certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificate"></a>

```python
certificate: LightsailContainerServicePublicDomainNamesCertificateList
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificateList">LightsailContainerServicePublicDomainNamesCertificateList</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.certificateInput"></a>

```python
certificate_input: typing.Union[IResolvable, typing.List[LightsailContainerServicePublicDomainNamesCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesCertificate">LightsailContainerServicePublicDomainNamesCertificate</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNamesOutputReference.property.internalValue"></a>

```python
internal_value: LightsailContainerServicePublicDomainNames
```

- *Type:* <a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServicePublicDomainNames">LightsailContainerServicePublicDomainNames</a>

---


### LightsailContainerServiceTimeoutsOutputReference <a name="LightsailContainerServiceTimeoutsOutputReference" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_container_service

lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LightsailContainerServiceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lightsailContainerService.LightsailContainerServiceTimeouts">LightsailContainerServiceTimeouts</a>, cdktf.IResolvable]

---



