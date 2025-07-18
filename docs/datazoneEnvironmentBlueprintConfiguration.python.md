# `datazoneEnvironmentBlueprintConfiguration` Submodule <a name="`datazoneEnvironmentBlueprintConfiguration` Submodule" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentBlueprintConfiguration <a name="DatazoneEnvironmentBlueprintConfiguration" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration aws_datazone_environment_blueprint_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str,
  enabled_regions: typing.List[str],
  environment_blueprint_id: str,
  manage_access_role_arn: str = None,
  provisioning_role_arn: str = None,
  region: str = None,
  regional_parameters: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.regionalParameters">regional_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}.

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.enabledRegions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.environmentBlueprintId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}.

---

##### `manage_access_role_arn`<sup>Optional</sup> <a name="manage_access_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.manageAccessRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `provisioning_role_arn`<sup>Optional</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.provisioningRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}

---

##### `regional_parameters`<sup>Optional</sup> <a name="regional_parameters" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.Initializer.parameter.regionalParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn">reset_manage_access_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn">reset_provisioning_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters">reset_regional_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_manage_access_role_arn` <a name="reset_manage_access_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetManageAccessRoleArn"></a>

```python
def reset_manage_access_role_arn() -> None
```

##### `reset_provisioning_role_arn` <a name="reset_provisioning_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetProvisioningRoleArn"></a>

```python
def reset_provisioning_role_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_regional_parameters` <a name="reset_regional_parameters" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.resetRegionalParameters"></a>

```python
def reset_regional_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput">enabled_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdInput">environment_blueprint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput">manage_access_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput">provisioning_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput">regional_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters">regional_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `enabled_regions_input`<sup>Optional</sup> <a name="enabled_regions_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegionsInput"></a>

```python
enabled_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_blueprint_id_input`<sup>Optional</sup> <a name="environment_blueprint_id_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintIdInput"></a>

```python
environment_blueprint_id_input: str
```

- *Type:* str

---

##### `manage_access_role_arn_input`<sup>Optional</sup> <a name="manage_access_role_arn_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArnInput"></a>

```python
manage_access_role_arn_input: str
```

- *Type:* str

---

##### `provisioning_role_arn_input`<sup>Optional</sup> <a name="provisioning_role_arn_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArnInput"></a>

```python
provisioning_role_arn_input: str
```

- *Type:* str

---

##### `regional_parameters_input`<sup>Optional</sup> <a name="regional_parameters_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParametersInput"></a>

```python
regional_parameters_input: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.enabledRegions"></a>

```python
enabled_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

---

##### `manage_access_role_arn`<sup>Required</sup> <a name="manage_access_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.manageAccessRoleArn"></a>

```python
manage_access_role_arn: str
```

- *Type:* str

---

##### `provisioning_role_arn`<sup>Required</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `regional_parameters`<sup>Required</sup> <a name="regional_parameters" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.regionalParameters"></a>

```python
regional_parameters: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentBlueprintConfigurationConfig <a name="DatazoneEnvironmentBlueprintConfigurationConfig" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_blueprint_configuration

datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_id: str,
  enabled_regions: typing.List[str],
  environment_blueprint_id: str,
  manage_access_role_arn: str = None,
  provisioning_role_arn: str = None,
  region: str = None,
  regional_parameters: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions">enabled_regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn">manage_access_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn">provisioning_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters">regional_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}.

---

##### `enabled_regions`<sup>Required</sup> <a name="enabled_regions" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.enabledRegions"></a>

```python
enabled_regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}.

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}.

---

##### `manage_access_role_arn`<sup>Optional</sup> <a name="manage_access_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.manageAccessRoleArn"></a>

```python
manage_access_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}.

---

##### `provisioning_role_arn`<sup>Optional</sup> <a name="provisioning_role_arn" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.provisioningRoleArn"></a>

```python
provisioning_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#region DatazoneEnvironmentBlueprintConfiguration#region}

---

##### `regional_parameters`<sup>Optional</sup> <a name="regional_parameters" id="@cdktf/provider-aws.datazoneEnvironmentBlueprintConfiguration.DatazoneEnvironmentBlueprintConfigurationConfig.property.regionalParameters"></a>

```python
regional_parameters: typing.Union[IResolvable, typing.Mapping[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.Mapping[typing.Mapping[str]]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}.

---



