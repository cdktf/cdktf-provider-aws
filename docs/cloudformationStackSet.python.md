# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktf/provider-aws.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set aws_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet(
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
  administration_role_arn: str = None,
  auto_deployment: CloudformationStackSetAutoDeployment = None,
  call_as: str = None,
  capabilities: typing.List[str] = None,
  description: str = None,
  execution_role_name: str = None,
  id: str = None,
  operation_preferences: CloudformationStackSetOperationPreferences = None,
  parameters: typing.Mapping[str] = None,
  permission_model: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  template_body: str = None,
  template_url: str = None,
  timeouts: CloudformationStackSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs">call_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName">execution_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel">permission_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `administration_role_arn`<sup>Optional</sup> <a name="administration_role_arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `auto_deployment`<sup>Optional</sup> <a name="auto_deployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `call_as`<sup>Optional</sup> <a name="call_as" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `execution_role_name`<sup>Optional</sup> <a name="execution_role_name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_preferences`<sup>Optional</sup> <a name="operation_preferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">put_auto_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">put_operation_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">reset_administration_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">reset_auto_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs">reset_call_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">reset_execution_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">reset_operation_preferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel">reset_permission_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">reset_template_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_auto_deployment` <a name="put_auto_deployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```python
def put_auto_deployment(
  enabled: typing.Union[bool, IResolvable] = None,
  retain_stacks_on_account_removal: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}.

---

###### `retain_stacks_on_account_removal`<sup>Optional</sup> <a name="retain_stacks_on_account_removal" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.retainStacksOnAccountRemoval"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.

---

##### `put_operation_preferences` <a name="put_operation_preferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```python
def put_operation_preferences(
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrent_count: typing.Union[int, float] = None,
  max_concurrent_percentage: typing.Union[int, float] = None,
  region_concurrency_type: str = None,
  region_order: typing.List[str] = None
) -> None
```

###### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.failureToleranceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

###### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.failureTolerancePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

###### `max_concurrent_count`<sup>Optional</sup> <a name="max_concurrent_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.maxConcurrentCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

###### `max_concurrent_percentage`<sup>Optional</sup> <a name="max_concurrent_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.maxConcurrentPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

###### `region_concurrency_type`<sup>Optional</sup> <a name="region_concurrency_type" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.regionConcurrencyType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}.

---

###### `region_order`<sup>Optional</sup> <a name="region_order" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.regionOrder"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts"></a>

```python
def put_timeouts(
  update: str = None
) -> None
```

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}.

---

##### `reset_administration_role_arn` <a name="reset_administration_role_arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```python
def reset_administration_role_arn() -> None
```

##### `reset_auto_deployment` <a name="reset_auto_deployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```python
def reset_auto_deployment() -> None
```

##### `reset_call_as` <a name="reset_call_as" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```python
def reset_call_as() -> None
```

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_role_name` <a name="reset_execution_role_name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```python
def reset_execution_role_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation_preferences` <a name="reset_operation_preferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```python
def reset_operation_preferences() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_permission_model` <a name="reset_permission_model" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetPermissionModel"></a>

```python
def reset_permission_model() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId">stack_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">administration_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">auto_deployment_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput">call_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">execution_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">operation_preferences_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">permission_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs">call_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">execution_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel">permission_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_deployment`<sup>Required</sup> <a name="auto_deployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```python
auto_deployment: CloudformationStackSetAutoDeploymentOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `operation_preferences`<sup>Required</sup> <a name="operation_preferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```python
operation_preferences: CloudformationStackSetOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `stack_set_id`<sup>Required</sup> <a name="stack_set_id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```python
stack_set_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeouts"></a>

```python
timeouts: CloudformationStackSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference">CloudformationStackSetTimeoutsOutputReference</a>

---

##### `administration_role_arn_input`<sup>Optional</sup> <a name="administration_role_arn_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```python
administration_role_arn_input: str
```

- *Type:* str

---

##### `auto_deployment_input`<sup>Optional</sup> <a name="auto_deployment_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```python
auto_deployment_input: CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `call_as_input`<sup>Optional</sup> <a name="call_as_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```python
call_as_input: str
```

- *Type:* str

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_role_name_input`<sup>Optional</sup> <a name="execution_role_name_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```python
execution_role_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operation_preferences_input`<sup>Optional</sup> <a name="operation_preferences_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```python
operation_preferences_input: CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `permission_model_input`<sup>Optional</sup> <a name="permission_model_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```python
permission_model_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[CloudformationStackSetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>, cdktf.IResolvable]

---

##### `administration_role_arn`<sup>Required</sup> <a name="administration_role_arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```python
administration_role_arn: str
```

- *Type:* str

---

##### `call_as`<sup>Required</sup> <a name="call_as" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```python
call_as: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_name`<sup>Required</sup> <a name="execution_role_name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```python
execution_role_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```python
permission_model: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetAutoDeployment(
  enabled: typing.Union[bool, IResolvable] = None,
  retain_stacks_on_account_removal: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">retain_stacks_on_account_removal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#enabled CloudformationStackSet#enabled}.

---

##### `retain_stacks_on_account_removal`<sup>Optional</sup> <a name="retain_stacks_on_account_removal" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```python
retain_stacks_on_account_removal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}.

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  administration_role_arn: str = None,
  auto_deployment: CloudformationStackSetAutoDeployment = None,
  call_as: str = None,
  capabilities: typing.List[str] = None,
  description: str = None,
  execution_role_name: str = None,
  id: str = None,
  operation_preferences: CloudformationStackSetOperationPreferences = None,
  parameters: typing.Mapping[str] = None,
  permission_model: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  template_body: str = None,
  template_url: str = None,
  timeouts: CloudformationStackSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | auto_deployment block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">call_as</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">execution_role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | operation_preferences block. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">permission_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">template_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">template_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#name CloudformationStackSet#name}.

---

##### `administration_role_arn`<sup>Optional</sup> <a name="administration_role_arn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```python
administration_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}.

---

##### `auto_deployment`<sup>Optional</sup> <a name="auto_deployment" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```python
auto_deployment: CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

auto_deployment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `call_as`<sup>Optional</sup> <a name="call_as" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```python
call_as: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#call_as CloudformationStackSet#call_as}.

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#description CloudformationStackSet#description}.

---

##### `execution_role_name`<sup>Optional</sup> <a name="execution_role_name" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```python
execution_role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#id CloudformationStackSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation_preferences`<sup>Optional</sup> <a name="operation_preferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```python
operation_preferences: CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

operation_preferences block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#parameters CloudformationStackSet#parameters}.

---

##### `permission_model`<sup>Optional</sup> <a name="permission_model" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```python
permission_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags CloudformationStackSet#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#tags_all CloudformationStackSet#tags_all}.

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_body CloudformationStackSet#template_body}.

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#template_url CloudformationStackSet#template_url}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetConfig.property.timeouts"></a>

```python
timeouts: CloudformationStackSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#timeouts CloudformationStackSet#timeouts}

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetOperationPreferences(
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrent_count: typing.Union[int, float] = None,
  max_concurrent_percentage: typing.Union[int, float] = None,
  region_concurrency_type: str = None,
  region_order: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">max_concurrent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">max_concurrent_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">region_concurrency_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">region_order</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `max_concurrent_count`<sup>Optional</sup> <a name="max_concurrent_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```python
max_concurrent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `max_concurrent_percentage`<sup>Optional</sup> <a name="max_concurrent_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```python
max_concurrent_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `region_concurrency_type`<sup>Optional</sup> <a name="region_concurrency_type" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```python
region_concurrency_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}.

---

##### `region_order`<sup>Optional</sup> <a name="region_order" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```python
region_order: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetTimeouts <a name="CloudformationStackSetTimeouts" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetTimeouts(
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}. |

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set#update CloudformationStackSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">reset_retain_stacks_on_account_removal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_retain_stacks_on_account_removal` <a name="reset_retain_stacks_on_account_removal" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```python
def reset_retain_stacks_on_account_removal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">retain_stacks_on_account_removal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retain_stacks_on_account_removal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retain_stacks_on_account_removal_input`<sup>Optional</sup> <a name="retain_stacks_on_account_removal_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```python
retain_stacks_on_account_removal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retain_stacks_on_account_removal`<sup>Required</sup> <a name="retain_stacks_on_account_removal" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```python
retain_stacks_on_account_removal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">reset_failure_tolerance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">reset_failure_tolerance_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">reset_max_concurrent_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">reset_max_concurrent_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">reset_region_concurrency_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">reset_region_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_tolerance_count` <a name="reset_failure_tolerance_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```python
def reset_failure_tolerance_count() -> None
```

##### `reset_failure_tolerance_percentage` <a name="reset_failure_tolerance_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```python
def reset_failure_tolerance_percentage() -> None
```

##### `reset_max_concurrent_count` <a name="reset_max_concurrent_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```python
def reset_max_concurrent_count() -> None
```

##### `reset_max_concurrent_percentage` <a name="reset_max_concurrent_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```python
def reset_max_concurrent_percentage() -> None
```

##### `reset_region_concurrency_type` <a name="reset_region_concurrency_type" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```python
def reset_region_concurrency_type() -> None
```

##### `reset_region_order` <a name="reset_region_order" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```python
def reset_region_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">failure_tolerance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failure_tolerance_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">max_concurrent_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">max_concurrent_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">region_concurrency_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">region_order_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">max_concurrent_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">max_concurrent_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">region_concurrency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">region_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_tolerance_count_input`<sup>Optional</sup> <a name="failure_tolerance_count_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```python
failure_tolerance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage_input`<sup>Optional</sup> <a name="failure_tolerance_percentage_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```python
failure_tolerance_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_count_input`<sup>Optional</sup> <a name="max_concurrent_count_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```python
max_concurrent_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_percentage_input`<sup>Optional</sup> <a name="max_concurrent_percentage_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```python
max_concurrent_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_concurrency_type_input`<sup>Optional</sup> <a name="region_concurrency_type_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```python
region_concurrency_type_input: str
```

- *Type:* str

---

##### `region_order_input`<sup>Optional</sup> <a name="region_order_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```python
region_order_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `failure_tolerance_count`<sup>Required</sup> <a name="failure_tolerance_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage`<sup>Required</sup> <a name="failure_tolerance_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_count`<sup>Required</sup> <a name="max_concurrent_count" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```python
max_concurrent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_percentage`<sup>Required</sup> <a name="max_concurrent_percentage" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```python
max_concurrent_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_concurrency_type`<sup>Required</sup> <a name="region_concurrency_type" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```python
region_concurrency_type: str
```

- *Type:* str

---

##### `region_order`<sup>Required</sup> <a name="region_order" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```python
region_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetTimeoutsOutputReference <a name="CloudformationStackSetTimeoutsOutputReference" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudformationStackSetTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudformationStackSet.CloudformationStackSetTimeouts">CloudformationStackSetTimeouts</a>, cdktf.IResolvable]

---



