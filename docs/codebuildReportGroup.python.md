# `codebuildReportGroup` Submodule <a name="`codebuildReportGroup` Submodule" id="@cdktf/provider-aws.codebuildReportGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildReportGroup <a name="CodebuildReportGroup" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group aws_codebuild_report_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_config: CodebuildReportGroupExportConfig,
  name: str,
  type: str,
  delete_reports: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.exportConfig">export_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | export_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.deleteReports">delete_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_config`<sup>Required</sup> <a name="export_config" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.exportConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

export_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#export_config CodebuildReportGroup#export_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `delete_reports`<sup>Optional</sup> <a name="delete_reports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.deleteReports"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig">put_export_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports">reset_delete_reports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_export_config` <a name="put_export_config" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig"></a>

```python
def put_export_config(
  type: str,
  s3_destination: CodebuildReportGroupExportConfigS3Destination = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

###### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.putExportConfig.parameter.s3Destination"></a>

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}

---

##### `reset_delete_reports` <a name="reset_delete_reports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports"></a>

```python
def reset_delete_reports() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig">export_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput">delete_reports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput">export_config_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports">delete_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `export_config`<sup>Required</sup> <a name="export_config" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfig"></a>

```python
export_config: CodebuildReportGroupExportConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a>

---

##### `delete_reports_input`<sup>Optional</sup> <a name="delete_reports_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput"></a>

```python
delete_reports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `export_config_input`<sup>Optional</sup> <a name="export_config_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput"></a>

```python
export_config_input: CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `delete_reports`<sup>Required</sup> <a name="delete_reports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.deleteReports"></a>

```python
delete_reports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildReportGroupConfig <a name="CodebuildReportGroupConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_config: CodebuildReportGroupExportConfig,
  name: str,
  type: str,
  delete_reports: typing.Union[bool, IResolvable] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig">export_config</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | export_config block. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports">delete_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_config`<sup>Required</sup> <a name="export_config" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig"></a>

```python
export_config: CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

export_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#export_config CodebuildReportGroup#export_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#name CodebuildReportGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `delete_reports`<sup>Optional</sup> <a name="delete_reports" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports"></a>

```python
delete_reports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#id CodebuildReportGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags CodebuildReportGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}.

---

### CodebuildReportGroupExportConfig <a name="CodebuildReportGroupExportConfig" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroupExportConfig(
  type: str,
  s3_destination: CodebuildReportGroupExportConfigS3Destination = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | s3_destination block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `s3_destination`<sup>Optional</sup> <a name="s3_destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination"></a>

```python
s3_destination: CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}

---

### CodebuildReportGroupExportConfigS3Destination <a name="CodebuildReportGroupExportConfigS3Destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination(
  bucket: str,
  encryption_key: str,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  packaging: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey">encryption_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging">packaging</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}.

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}.

---

##### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildReportGroupExportConfigOutputReference <a name="CodebuildReportGroupExportConfigOutputReference" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination">put_s3_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination">reset_s3_destination</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_destination` <a name="put_s3_destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination"></a>

```python
def put_s3_destination(
  bucket: str,
  encryption_key: str,
  encryption_disabled: typing.Union[bool, IResolvable] = None,
  packaging: str = None,
  path: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#bucket CodebuildReportGroup#bucket}.

---

###### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.encryptionKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}.

---

###### `encryption_disabled`<sup>Optional</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.encryptionDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}.

---

###### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.packaging"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#packaging CodebuildReportGroup#packaging}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group#path CodebuildReportGroup#path}.

---

##### `reset_s3_destination` <a name="reset_s3_destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination"></a>

```python
def reset_s3_destination() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination">s3_destination</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput">s3_destination_input</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_destination`<sup>Required</sup> <a name="s3_destination" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination"></a>

```python
s3_destination: CodebuildReportGroupExportConfigS3DestinationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a>

---

##### `s3_destination_input`<sup>Optional</sup> <a name="s3_destination_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput"></a>

```python
s3_destination_input: CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildReportGroupExportConfig
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---


### CodebuildReportGroupExportConfigS3DestinationOutputReference <a name="CodebuildReportGroupExportConfigS3DestinationOutputReference" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codebuild_report_group

codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled">reset_encryption_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging">reset_packaging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath">reset_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_encryption_disabled` <a name="reset_encryption_disabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled"></a>

```python
def reset_encryption_disabled() -> None
```

##### `reset_packaging` <a name="reset_packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging"></a>

```python
def reset_packaging() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath"></a>

```python
def reset_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput">encryption_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput">encryption_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput">packaging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled">encryption_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey">encryption_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging">packaging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `encryption_disabled_input`<sup>Optional</sup> <a name="encryption_disabled_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput"></a>

```python
encryption_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_key_input`<sup>Optional</sup> <a name="encryption_key_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput"></a>

```python
encryption_key_input: str
```

- *Type:* str

---

##### `packaging_input`<sup>Optional</sup> <a name="packaging_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput"></a>

```python
packaging_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `encryption_disabled`<sup>Required</sup> <a name="encryption_disabled" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled"></a>

```python
encryption_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encryption_key`<sup>Required</sup> <a name="encryption_key" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey"></a>

```python
encryption_key: str
```

- *Type:* str

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging"></a>

```python
packaging: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue"></a>

```python
internal_value: CodebuildReportGroupExportConfigS3Destination
```

- *Type:* <a href="#@cdktf/provider-aws.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---



