# `devicefarmInstanceProfile` Submodule <a name="`devicefarmInstanceProfile` Submodule" id="@cdktf/provider-aws.devicefarmInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmInstanceProfile <a name="DevicefarmInstanceProfile" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile aws_devicefarm_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_instance_profile

devicefarmInstanceProfile.DevicefarmInstanceProfile(
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
  description: str = None,
  exclude_app_packages_from_cleanup: typing.List[str] = None,
  id: str = None,
  package_cleanup: typing.Union[bool, IResolvable] = None,
  reboot_after_use: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup">exclude_app_packages_from_cleanup</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup">package_cleanup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse">reboot_after_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `exclude_app_packages_from_cleanup`<sup>Optional</sup> <a name="exclude_app_packages_from_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.excludeAppPackagesFromCleanup"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_cleanup`<sup>Optional</sup> <a name="package_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.packageCleanup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `reboot_after_use`<sup>Optional</sup> <a name="reboot_after_use" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.rebootAfterUse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup">reset_exclude_app_packages_from_cleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup">reset_package_cleanup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse">reset_reboot_after_use</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_app_packages_from_cleanup` <a name="reset_exclude_app_packages_from_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetExcludeAppPackagesFromCleanup"></a>

```python
def reset_exclude_app_packages_from_cleanup() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_package_cleanup` <a name="reset_package_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetPackageCleanup"></a>

```python
def reset_package_cleanup() -> None
```

##### `reset_reboot_after_use` <a name="reset_reboot_after_use" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetRebootAfterUse"></a>

```python
def reset_reboot_after_use() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_instance_profile

devicefarmInstanceProfile.DevicefarmInstanceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_instance_profile

devicefarmInstanceProfile.DevicefarmInstanceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_instance_profile

devicefarmInstanceProfile.DevicefarmInstanceProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput">exclude_app_packages_from_cleanup_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput">package_cleanup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput">reboot_after_use_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup">exclude_app_packages_from_cleanup</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup">package_cleanup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse">reboot_after_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_app_packages_from_cleanup_input`<sup>Optional</sup> <a name="exclude_app_packages_from_cleanup_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanupInput"></a>

```python
exclude_app_packages_from_cleanup_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `package_cleanup_input`<sup>Optional</sup> <a name="package_cleanup_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanupInput"></a>

```python
package_cleanup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reboot_after_use_input`<sup>Optional</sup> <a name="reboot_after_use_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUseInput"></a>

```python
reboot_after_use_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_app_packages_from_cleanup`<sup>Required</sup> <a name="exclude_app_packages_from_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.excludeAppPackagesFromCleanup"></a>

```python
exclude_app_packages_from_cleanup: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `package_cleanup`<sup>Required</sup> <a name="package_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.packageCleanup"></a>

```python
package_cleanup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reboot_after_use`<sup>Required</sup> <a name="reboot_after_use" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.rebootAfterUse"></a>

```python
reboot_after_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmInstanceProfileConfig <a name="DevicefarmInstanceProfileConfig" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_instance_profile

devicefarmInstanceProfile.DevicefarmInstanceProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  exclude_app_packages_from_cleanup: typing.List[str] = None,
  id: str = None,
  package_cleanup: typing.Union[bool, IResolvable] = None,
  reboot_after_use: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup">exclude_app_packages_from_cleanup</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup">package_cleanup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse">reboot_after_use</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#name DevicefarmInstanceProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#description DevicefarmInstanceProfile#description}.

---

##### `exclude_app_packages_from_cleanup`<sup>Optional</sup> <a name="exclude_app_packages_from_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.excludeAppPackagesFromCleanup"></a>

```python
exclude_app_packages_from_cleanup: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#exclude_app_packages_from_cleanup DevicefarmInstanceProfile#exclude_app_packages_from_cleanup}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#id DevicefarmInstanceProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `package_cleanup`<sup>Optional</sup> <a name="package_cleanup" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.packageCleanup"></a>

```python
package_cleanup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#package_cleanup DevicefarmInstanceProfile#package_cleanup}.

---

##### `reboot_after_use`<sup>Optional</sup> <a name="reboot_after_use" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.rebootAfterUse"></a>

```python
reboot_after_use: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#reboot_after_use DevicefarmInstanceProfile#reboot_after_use}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags DevicefarmInstanceProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmInstanceProfile.DevicefarmInstanceProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_instance_profile#tags_all DevicefarmInstanceProfile#tags_all}.

---



