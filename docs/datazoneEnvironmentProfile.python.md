# `datazoneEnvironmentProfile` Submodule <a name="`datazoneEnvironmentProfile` Submodule" id="@cdktf/provider-aws.datazoneEnvironmentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentProfile <a name="DatazoneEnvironmentProfile" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile aws_datazone_environment_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_region: str,
  domain_identifier: str,
  environment_blueprint_identifier: str,
  name: str,
  project_identifier: str,
  aws_account_id: str = None,
  description: str = None,
  user_parameters: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountRegion">aws_account_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.projectIdentifier">project_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.userParameters">user_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]</code> | user_parameters block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_region`<sup>Required</sup> <a name="aws_account_region" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}.

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}.

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.environmentBlueprintIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.projectIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}.

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.Initializer.parameter.userParameters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters">put_user_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters">reset_user_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_parameters` <a name="put_user_parameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters"></a>

```python
def put_user_parameters(
  value: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.putUserParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_user_parameters` <a name="reset_user_parameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.resetUserParameters"></a>

```python
def reset_user_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatazoneEnvironmentProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneEnvironmentProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneEnvironmentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters">user_parameters</a></code> | <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput">aws_account_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput">environment_blueprint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput">project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput">user_parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion">aws_account_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_parameters`<sup>Required</sup> <a name="user_parameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParameters"></a>

```python
user_parameters: DatazoneEnvironmentProfileUserParametersList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList">DatazoneEnvironmentProfileUserParametersList</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_account_region_input`<sup>Optional</sup> <a name="aws_account_region_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegionInput"></a>

```python
aws_account_region_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `environment_blueprint_identifier_input`<sup>Optional</sup> <a name="environment_blueprint_identifier_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifierInput"></a>

```python
environment_blueprint_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_identifier_input`<sup>Optional</sup> <a name="project_identifier_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifierInput"></a>

```python
project_identifier_input: str
```

- *Type:* str

---

##### `user_parameters_input`<sup>Optional</sup> <a name="user_parameters_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.userParametersInput"></a>

```python
user_parameters_input: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_account_region`<sup>Required</sup> <a name="aws_account_region" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.awsAccountRegion"></a>

```python
aws_account_region: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentProfileConfig <a name="DatazoneEnvironmentProfileConfig" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_region: str,
  domain_identifier: str,
  environment_blueprint_identifier: str,
  name: str,
  project_identifier: str,
  aws_account_id: str = None,
  description: str = None,
  user_parameters: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion">aws_account_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters">user_parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]</code> | user_parameters block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_region`<sup>Required</sup> <a name="aws_account_region" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountRegion"></a>

```python
aws_account_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_region DatazoneEnvironmentProfile#aws_account_region}.

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#domain_identifier DatazoneEnvironmentProfile#domain_identifier}.

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#environment_blueprint_identifier DatazoneEnvironmentProfile#environment_blueprint_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#project_identifier DatazoneEnvironmentProfile#project_identifier}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#aws_account_id DatazoneEnvironmentProfile#aws_account_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#description DatazoneEnvironmentProfile#description}.

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileConfig.property.userParameters"></a>

```python
user_parameters: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]

user_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#user_parameters DatazoneEnvironmentProfile#user_parameters}

---

### DatazoneEnvironmentProfileUserParameters <a name="DatazoneEnvironmentProfileUserParameters" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#name DatazoneEnvironmentProfile#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.78.0/docs/resources/datazone_environment_profile#value DatazoneEnvironmentProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentProfileUserParametersList <a name="DatazoneEnvironmentProfileUserParametersList" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneEnvironmentProfileUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatazoneEnvironmentProfileUserParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]]

---


### DatazoneEnvironmentProfileUserParametersOutputReference <a name="DatazoneEnvironmentProfileUserParametersOutputReference" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_environment_profile

datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatazoneEnvironmentProfileUserParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneEnvironmentProfile.DatazoneEnvironmentProfileUserParameters">DatazoneEnvironmentProfileUserParameters</a>]

---



