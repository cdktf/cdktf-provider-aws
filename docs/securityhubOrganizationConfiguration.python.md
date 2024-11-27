# `securityhubOrganizationConfiguration` Submodule <a name="`securityhubOrganizationConfiguration` Submodule" id="@cdktf/provider-aws.securityhubOrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubOrganizationConfiguration <a name="SecurityhubOrganizationConfiguration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_enable: typing.Union[bool, IResolvable],
  auto_enable_standards: str = None,
  id: str = None,
  organization_configuration: SecurityhubOrganizationConfigurationOrganizationConfiguration = None,
  timeouts: SecurityhubOrganizationConfigurationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnable">auto_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnableStandards">auto_enable_standards</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | organization_configuration block. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}.

---

##### `auto_enable_standards`<sup>Optional</sup> <a name="auto_enable_standards" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnableStandards"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_configuration`<sup>Optional</sup> <a name="organization_configuration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.organizationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

organization_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration">put_organization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetAutoEnableStandards">reset_auto_enable_standards</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOrganizationConfiguration">reset_organization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_organization_configuration` <a name="put_organization_configuration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration"></a>

```python
def put_organization_configuration(
  configuration_type: str
) -> None
```

###### `configuration_type`<sup>Required</sup> <a name="configuration_type" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration.parameter.configurationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}.

---

##### `reset_auto_enable_standards` <a name="reset_auto_enable_standards" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetAutoEnableStandards"></a>

```python
def reset_auto_enable_standards() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization_configuration` <a name="reset_organization_configuration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOrganizationConfiguration"></a>

```python
def reset_organization_configuration() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecurityhubOrganizationConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecurityhubOrganizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecurityhubOrganizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference">SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference">SecurityhubOrganizationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableInput">auto_enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandardsInput">auto_enable_standards_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfigurationInput">organization_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnable">auto_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandards">auto_enable_standards</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization_configuration`<sup>Required</sup> <a name="organization_configuration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfiguration"></a>

```python
organization_configuration: SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference">SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeouts"></a>

```python
timeouts: SecurityhubOrganizationConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference">SecurityhubOrganizationConfigurationTimeoutsOutputReference</a>

---

##### `auto_enable_input`<sup>Optional</sup> <a name="auto_enable_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableInput"></a>

```python
auto_enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_enable_standards_input`<sup>Optional</sup> <a name="auto_enable_standards_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandardsInput"></a>

```python
auto_enable_standards_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `organization_configuration_input`<sup>Optional</sup> <a name="organization_configuration_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfigurationInput"></a>

```python
organization_configuration_input: SecurityhubOrganizationConfigurationOrganizationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SecurityhubOrganizationConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnable"></a>

```python
auto_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_enable_standards`<sup>Required</sup> <a name="auto_enable_standards" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandards"></a>

```python
auto_enable_standards: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubOrganizationConfigurationConfig <a name="SecurityhubOrganizationConfigurationConfig" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_enable: typing.Union[bool, IResolvable],
  auto_enable_standards: str = None,
  id: str = None,
  organization_configuration: SecurityhubOrganizationConfigurationOrganizationConfiguration = None,
  timeouts: SecurityhubOrganizationConfigurationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnable">auto_enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnableStandards">auto_enable_standards</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.organizationConfiguration">organization_configuration</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | organization_configuration block. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_enable`<sup>Required</sup> <a name="auto_enable" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnable"></a>

```python
auto_enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}.

---

##### `auto_enable_standards`<sup>Optional</sup> <a name="auto_enable_standards" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnableStandards"></a>

```python
auto_enable_standards: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization_configuration`<sup>Optional</sup> <a name="organization_configuration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.organizationConfiguration"></a>

```python
organization_configuration: SecurityhubOrganizationConfigurationOrganizationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

organization_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.timeouts"></a>

```python
timeouts: SecurityhubOrganizationConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}

---

### SecurityhubOrganizationConfigurationOrganizationConfiguration <a name="SecurityhubOrganizationConfigurationOrganizationConfiguration" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration(
  configuration_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.property.configurationType">configuration_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}. |

---

##### `configuration_type`<sup>Required</sup> <a name="configuration_type" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.property.configurationType"></a>

```python
configuration_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}.

---

### SecurityhubOrganizationConfigurationTimeouts <a name="SecurityhubOrganizationConfigurationTimeouts" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference <a name="SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationTypeInput">configuration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationType">configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_type_input`<sup>Optional</sup> <a name="configuration_type_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationTypeInput"></a>

```python
configuration_type_input: str
```

- *Type:* str

---

##### `configuration_type`<sup>Required</sup> <a name="configuration_type" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationType"></a>

```python
configuration_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: SecurityhubOrganizationConfigurationOrganizationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

---


### SecurityhubOrganizationConfigurationTimeoutsOutputReference <a name="SecurityhubOrganizationConfigurationTimeoutsOutputReference" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import securityhub_organization_configuration

securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SecurityhubOrganizationConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>]

---



