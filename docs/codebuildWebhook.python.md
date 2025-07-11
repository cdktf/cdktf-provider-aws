# `codebuildWebhook` Submodule <a name="`codebuildWebhook` Submodule" id="@cdktf/provider-aws.codebuildWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildWebhook <a name="CodebuildWebhook" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook aws_codebuild_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str,
  branch_filter: str = None,
  build_type: str = None,
  filter_group: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]] = None,
  id: str = None,
  manual_creation: typing.Union[bool, IResolvable] = None,
  region: str = None,
  scope_configuration: CodebuildWebhookScopeConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.branchFilter">branch_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.buildType">build_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.filterGroup">filter_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]</code> | filter_group block. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.manualCreation">manual_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | scope_configuration block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.projectName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.branchFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.buildType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filter_group`<sup>Optional</sup> <a name="filter_group" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.filterGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manual_creation`<sup>Optional</sup> <a name="manual_creation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.manualCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#region CodebuildWebhook#region}

---

##### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scopeConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup">put_filter_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration">put_scope_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter">reset_branch_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType">reset_build_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup">reset_filter_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation">reset_manual_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration">reset_scope_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_filter_group` <a name="put_filter_group" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup"></a>

```python
def put_filter_group(
  value: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putFilterGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]

---

##### `put_scope_configuration` <a name="put_scope_configuration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration"></a>

```python
def put_scope_configuration(
  name: str,
  scope: str,
  domain: str = None
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}.

---

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration.parameter.scope"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}.

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.putScopeConfiguration.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}.

---

##### `reset_branch_filter` <a name="reset_branch_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBranchFilter"></a>

```python
def reset_branch_filter() -> None
```

##### `reset_build_type` <a name="reset_build_type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetBuildType"></a>

```python
def reset_build_type() -> None
```

##### `reset_filter_group` <a name="reset_filter_group" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetFilterGroup"></a>

```python
def reset_filter_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_manual_creation` <a name="reset_manual_creation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetManualCreation"></a>

```python
def reset_manual_creation() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scope_configuration` <a name="reset_scope_configuration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.resetScopeConfiguration"></a>

```python
def reset_scope_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhook.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CodebuildWebhook to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CodebuildWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup">filter_group</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl">payload_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput">branch_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput">build_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput">filter_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput">manual_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput">project_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput">scope_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter">branch_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType">build_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation">manual_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName">project_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_group`<sup>Required</sup> <a name="filter_group" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroup"></a>

```python
filter_group: CodebuildWebhookFilterGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a>

---

##### `payload_url`<sup>Required</sup> <a name="payload_url" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.payloadUrl"></a>

```python
payload_url: str
```

- *Type:* str

---

##### `scope_configuration`<sup>Required</sup> <a name="scope_configuration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfiguration"></a>

```python
scope_configuration: CodebuildWebhookScopeConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference">CodebuildWebhookScopeConfigurationOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `branch_filter_input`<sup>Optional</sup> <a name="branch_filter_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilterInput"></a>

```python
branch_filter_input: str
```

- *Type:* str

---

##### `build_type_input`<sup>Optional</sup> <a name="build_type_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildTypeInput"></a>

```python
build_type_input: str
```

- *Type:* str

---

##### `filter_group_input`<sup>Optional</sup> <a name="filter_group_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.filterGroupInput"></a>

```python
filter_group_input: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `manual_creation_input`<sup>Optional</sup> <a name="manual_creation_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreationInput"></a>

```python
manual_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_name_input`<sup>Optional</sup> <a name="project_name_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectNameInput"></a>

```python
project_name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scope_configuration_input`<sup>Optional</sup> <a name="scope_configuration_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.scopeConfigurationInput"></a>

```python
scope_configuration_input: CodebuildWebhookScopeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---

##### `branch_filter`<sup>Required</sup> <a name="branch_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

---

##### `build_type`<sup>Required</sup> <a name="build_type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manual_creation`<sup>Required</sup> <a name="manual_creation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.manualCreation"></a>

```python
manual_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildWebhookConfig <a name="CodebuildWebhookConfig" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_name: str,
  branch_filter: str = None,
  build_type: str = None,
  filter_group: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]] = None,
  id: str = None,
  manual_creation: typing.Union[bool, IResolvable] = None,
  region: str = None,
  scope_configuration: CodebuildWebhookScopeConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName">project_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter">branch_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType">build_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup">filter_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]</code> | filter_group block. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation">manual_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration">scope_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | scope_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_name`<sup>Required</sup> <a name="project_name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.projectName"></a>

```python
project_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branch_filter`<sup>Optional</sup> <a name="branch_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter"></a>

```python
branch_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `build_type`<sup>Optional</sup> <a name="build_type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.buildType"></a>

```python
build_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filter_group`<sup>Optional</sup> <a name="filter_group" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup"></a>

```python
filter_group: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manual_creation`<sup>Optional</sup> <a name="manual_creation" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.manualCreation"></a>

```python
manual_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#manual_creation CodebuildWebhook#manual_creation}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#region CodebuildWebhook#region}

---

##### `scope_configuration`<sup>Optional</sup> <a name="scope_configuration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookConfig.property.scopeConfiguration"></a>

```python
scope_configuration: CodebuildWebhookScopeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#scope_configuration CodebuildWebhook#scope_configuration}

---

### CodebuildWebhookFilterGroup <a name="CodebuildWebhookFilterGroup" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroup(
  filter: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroupFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}

---

### CodebuildWebhookFilterGroupFilter <a name="CodebuildWebhookFilterGroupFilter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroupFilter(
  pattern: str,
  type: str,
  exclude_matched_pattern: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern">pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern">exclude_matched_pattern</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#type CodebuildWebhook#type}.

---

##### `exclude_matched_pattern`<sup>Optional</sup> <a name="exclude_matched_pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern"></a>

```python
exclude_matched_pattern: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}.

---

### CodebuildWebhookScopeConfiguration <a name="CodebuildWebhookScopeConfiguration" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookScopeConfiguration(
  name: str,
  scope: str,
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#name CodebuildWebhook#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#scope CodebuildWebhook#scope}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.3.0/docs/resources/codebuild_webhook#domain CodebuildWebhook#domain}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildWebhookFilterGroupFilterList <a name="CodebuildWebhookFilterGroupFilterList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroupFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildWebhookFilterGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]

---


### CodebuildWebhookFilterGroupFilterOutputReference <a name="CodebuildWebhookFilterGroupFilterOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern">reset_exclude_matched_pattern</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_matched_pattern` <a name="reset_exclude_matched_pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern"></a>

```python
def reset_exclude_matched_pattern() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput">exclude_matched_pattern_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern">exclude_matched_pattern</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_matched_pattern_input`<sup>Optional</sup> <a name="exclude_matched_pattern_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput"></a>

```python
exclude_matched_pattern_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `exclude_matched_pattern`<sup>Required</sup> <a name="exclude_matched_pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern"></a>

```python
exclude_matched_pattern: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodebuildWebhookFilterGroupFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]

---


### CodebuildWebhookFilterGroupList <a name="CodebuildWebhookFilterGroupList" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodebuildWebhookFilterGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]]

---


### CodebuildWebhookFilterGroupOutputReference <a name="CodebuildWebhookFilterGroupOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookFilterGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroupFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter"></a>

```python
filter: CodebuildWebhookFilterGroupFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[CodebuildWebhookFilterGroupFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CodebuildWebhookFilterGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>]

---


### CodebuildWebhookScopeConfigurationOutputReference <a name="CodebuildWebhookScopeConfigurationOutputReference" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_webhook

codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildWebhookScopeConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildWebhook.CodebuildWebhookScopeConfiguration">CodebuildWebhookScopeConfiguration</a>

---



