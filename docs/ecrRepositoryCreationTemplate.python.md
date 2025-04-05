# `ecrRepositoryCreationTemplate` Submodule <a name="`ecrRepositoryCreationTemplate` Submodule" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepositoryCreationTemplate <a name="EcrRepositoryCreationTemplate" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template aws_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  applied_for: typing.List[str],
  prefix: str,
  custom_role_arn: str = None,
  description: str = None,
  encryption_configuration: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]] = None,
  id: str = None,
  image_tag_mutability: str = None,
  lifecycle_policy: str = None,
  repository_policy: str = None,
  resource_tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.customRoleArn">custom_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]</code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.repositoryPolicy">repository_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.appliedFor"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}.

---

##### `custom_role_arn`<sup>Optional</sup> <a name="custom_role_arn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.customRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.imageTagMutability"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}.

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.lifecyclePolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}.

---

##### `repository_policy`<sup>Optional</sup> <a name="repository_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.repositoryPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.resourceTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn">reset_custom_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability">reset_image_tag_mutability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy">reset_lifecycle_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy">reset_repository_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags">reset_resource_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  value: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]

---

##### `reset_custom_role_arn` <a name="reset_custom_role_arn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn"></a>

```python
def reset_custom_role_arn() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_tag_mutability` <a name="reset_image_tag_mutability" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability"></a>

```python
def reset_image_tag_mutability() -> None
```

##### `reset_lifecycle_policy` <a name="reset_lifecycle_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy"></a>

```python
def reset_lifecycle_policy() -> None
```

##### `reset_repository_policy` <a name="reset_repository_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy"></a>

```python
def reset_repository_policy() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EcrRepositoryCreationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EcrRepositoryCreationTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList">EcrRepositoryCreationTemplateEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.registryId">registry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput">applied_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput">custom_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput">image_tag_mutability_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput">lifecycle_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput">repository_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput">resource_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn">custom_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy">repository_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```python
encryption_configuration: EcrRepositoryCreationTemplateEncryptionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList">EcrRepositoryCreationTemplateEncryptionConfigurationList</a>

---

##### `registry_id`<sup>Required</sup> <a name="registry_id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.registryId"></a>

```python
registry_id: str
```

- *Type:* str

---

##### `applied_for_input`<sup>Optional</sup> <a name="applied_for_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput"></a>

```python
applied_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_role_arn_input`<sup>Optional</sup> <a name="custom_role_arn_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput"></a>

```python
custom_role_arn_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_tag_mutability_input`<sup>Optional</sup> <a name="image_tag_mutability_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput"></a>

```python
image_tag_mutability_input: str
```

- *Type:* str

---

##### `lifecycle_policy_input`<sup>Optional</sup> <a name="lifecycle_policy_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput"></a>

```python
lifecycle_policy_input: str
```

- *Type:* str

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `repository_policy_input`<sup>Optional</sup> <a name="repository_policy_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput"></a>

```python
repository_policy_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```python
resource_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor"></a>

```python
applied_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `custom_role_arn`<sup>Required</sup> <a name="custom_role_arn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn"></a>

```python
custom_role_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_tag_mutability`<sup>Required</sup> <a name="image_tag_mutability" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

---

##### `lifecycle_policy`<sup>Required</sup> <a name="lifecycle_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```python
lifecycle_policy: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `repository_policy`<sup>Required</sup> <a name="repository_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```python
repository_policy: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryCreationTemplateConfig <a name="EcrRepositoryCreationTemplateConfig" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  applied_for: typing.List[str],
  prefix: str,
  custom_role_arn: str = None,
  description: str = None,
  encryption_configuration: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]] = None,
  id: str = None,
  image_tag_mutability: str = None,
  lifecycle_policy: str = None,
  repository_policy: str = None,
  resource_tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor">applied_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn">custom_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]</code> | encryption_configuration block. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability">image_tag_mutability</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy">lifecycle_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy">repository_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags">resource_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applied_for`<sup>Required</sup> <a name="applied_for" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor"></a>

```python
applied_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}.

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}.

---

##### `custom_role_arn`<sup>Optional</sup> <a name="custom_role_arn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn"></a>

```python
custom_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]

encryption_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#id EcrRepositoryCreationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_tag_mutability`<sup>Optional</sup> <a name="image_tag_mutability" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability"></a>

```python
image_tag_mutability: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}.

---

##### `lifecycle_policy`<sup>Optional</sup> <a name="lifecycle_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy"></a>

```python
lifecycle_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}.

---

##### `repository_policy`<sup>Optional</sup> <a name="repository_policy" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy"></a>

```python
repository_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}.

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```python
resource_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}.

---

### EcrRepositoryCreationTemplateEncryptionConfiguration <a name="EcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration(
  encryption_type: str = None,
  kms_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType">encryption_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey">kms_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}. |

---

##### `encryption_type`<sup>Optional</sup> <a name="encryption_type" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}.

---

##### `kms_key`<sup>Optional</sup> <a name="kms_key" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryCreationTemplateEncryptionConfigurationList <a name="EcrRepositoryCreationTemplateEncryptionConfigurationList" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[EcrRepositoryCreationTemplateEncryptionConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]]

---


### EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ecr_repository_creation_template

ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType">reset_encryption_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey">reset_kms_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_type` <a name="reset_encryption_type" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```python
def reset_encryption_type() -> None
```

##### `reset_kms_key` <a name="reset_kms_key" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey"></a>

```python
def reset_kms_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput">encryption_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_type_input`<sup>Optional</sup> <a name="encryption_type_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```python
encryption_type_input: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EcrRepositoryCreationTemplateEncryptionConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>]

---



