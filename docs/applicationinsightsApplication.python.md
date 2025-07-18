# `applicationinsightsApplication` Submodule <a name="`applicationinsightsApplication` Submodule" id="@cdktf/provider-aws.applicationinsightsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationinsightsApplication <a name="ApplicationinsightsApplication" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application aws_applicationinsights_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplication(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_group_name: str,
  auto_config_enabled: typing.Union[bool, IResolvable] = None,
  auto_create: typing.Union[bool, IResolvable] = None,
  cwe_monitor_enabled: typing.Union[bool, IResolvable] = None,
  grouping_type: str = None,
  id: str = None,
  ops_center_enabled: typing.Union[bool, IResolvable] = None,
  ops_item_sns_topic_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoConfigEnabled">auto_config_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.cweMonitorEnabled">cwe_monitor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.groupingType">grouping_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsCenterEnabled">ops_center_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsItemSnsTopicArn">ops_item_sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `auto_config_enabled`<sup>Optional</sup> <a name="auto_config_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoConfigEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `auto_create`<sup>Optional</sup> <a name="auto_create" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.autoCreate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `cwe_monitor_enabled`<sup>Optional</sup> <a name="cwe_monitor_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.cweMonitorEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `grouping_type`<sup>Optional</sup> <a name="grouping_type" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.groupingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ops_center_enabled`<sup>Optional</sup> <a name="ops_center_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsCenterEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `ops_item_sns_topic_arn`<sup>Optional</sup> <a name="ops_item_sns_topic_arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.opsItemSnsTopicArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#region ApplicationinsightsApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled">reset_auto_config_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate">reset_auto_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled">reset_cwe_monitor_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType">reset_grouping_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled">reset_ops_center_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn">reset_ops_item_sns_topic_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auto_config_enabled` <a name="reset_auto_config_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoConfigEnabled"></a>

```python
def reset_auto_config_enabled() -> None
```

##### `reset_auto_create` <a name="reset_auto_create" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetAutoCreate"></a>

```python
def reset_auto_create() -> None
```

##### `reset_cwe_monitor_enabled` <a name="reset_cwe_monitor_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetCweMonitorEnabled"></a>

```python
def reset_cwe_monitor_enabled() -> None
```

##### `reset_grouping_type` <a name="reset_grouping_type" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetGroupingType"></a>

```python
def reset_grouping_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ops_center_enabled` <a name="reset_ops_center_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsCenterEnabled"></a>

```python
def reset_ops_center_enabled() -> None
```

##### `reset_ops_item_sns_topic_arn` <a name="reset_ops_item_sns_topic_arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetOpsItemSnsTopicArn"></a>

```python
def reset_ops_item_sns_topic_arn() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationinsightsApplication resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationinsightsApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationinsightsApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationinsightsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationinsightsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput">auto_config_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput">auto_create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput">cwe_monitor_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput">grouping_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput">ops_center_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput">ops_item_sns_topic_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled">auto_config_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled">cwe_monitor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType">grouping_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled">ops_center_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn">ops_item_sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_config_enabled_input`<sup>Optional</sup> <a name="auto_config_enabled_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabledInput"></a>

```python
auto_config_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_create_input`<sup>Optional</sup> <a name="auto_create_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreateInput"></a>

```python
auto_create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cwe_monitor_enabled_input`<sup>Optional</sup> <a name="cwe_monitor_enabled_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabledInput"></a>

```python
cwe_monitor_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grouping_type_input`<sup>Optional</sup> <a name="grouping_type_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingTypeInput"></a>

```python
grouping_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ops_center_enabled_input`<sup>Optional</sup> <a name="ops_center_enabled_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabledInput"></a>

```python
ops_center_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ops_item_sns_topic_arn_input`<sup>Optional</sup> <a name="ops_item_sns_topic_arn_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArnInput"></a>

```python
ops_item_sns_topic_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_config_enabled`<sup>Required</sup> <a name="auto_config_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoConfigEnabled"></a>

```python
auto_config_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_create`<sup>Required</sup> <a name="auto_create" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.autoCreate"></a>

```python
auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cwe_monitor_enabled`<sup>Required</sup> <a name="cwe_monitor_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.cweMonitorEnabled"></a>

```python
cwe_monitor_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grouping_type`<sup>Required</sup> <a name="grouping_type" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.groupingType"></a>

```python
grouping_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ops_center_enabled`<sup>Required</sup> <a name="ops_center_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsCenterEnabled"></a>

```python
ops_center_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ops_item_sns_topic_arn`<sup>Required</sup> <a name="ops_item_sns_topic_arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.opsItemSnsTopicArn"></a>

```python
ops_item_sns_topic_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationinsightsApplicationConfig <a name="ApplicationinsightsApplicationConfig" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import applicationinsights_application

applicationinsightsApplication.ApplicationinsightsApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  resource_group_name: str,
  auto_config_enabled: typing.Union[bool, IResolvable] = None,
  auto_create: typing.Union[bool, IResolvable] = None,
  cwe_monitor_enabled: typing.Union[bool, IResolvable] = None,
  grouping_type: str = None,
  id: str = None,
  ops_center_enabled: typing.Union[bool, IResolvable] = None,
  ops_item_sns_topic_arn: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled">auto_config_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate">auto_create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled">cwe_monitor_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType">grouping_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled">ops_center_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn">ops_item_sns_topic_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}.

---

##### `auto_config_enabled`<sup>Optional</sup> <a name="auto_config_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoConfigEnabled"></a>

```python
auto_config_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}.

---

##### `auto_create`<sup>Optional</sup> <a name="auto_create" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.autoCreate"></a>

```python
auto_create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}.

---

##### `cwe_monitor_enabled`<sup>Optional</sup> <a name="cwe_monitor_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.cweMonitorEnabled"></a>

```python
cwe_monitor_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}.

---

##### `grouping_type`<sup>Optional</sup> <a name="grouping_type" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.groupingType"></a>

```python
grouping_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ops_center_enabled`<sup>Optional</sup> <a name="ops_center_enabled" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsCenterEnabled"></a>

```python
ops_center_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}.

---

##### `ops_item_sns_topic_arn`<sup>Optional</sup> <a name="ops_item_sns_topic_arn" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.opsItemSnsTopicArn"></a>

```python
ops_item_sns_topic_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#region ApplicationinsightsApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.applicationinsightsApplication.ApplicationinsightsApplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}.

---



