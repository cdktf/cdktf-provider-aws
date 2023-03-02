# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktf/provider-aws.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment aws_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  framework_id: str,
  name: str,
  roles: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]],
  assessment_reports_destination: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]] = None,
  description: str = None,
  scope: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId">framework_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination">assessment_reports_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]</code> | assessment_reports_destination block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}.

---

##### `assessment_reports_destination`<sup>Optional</sup> <a name="assessment_reports_destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]

assessment_reports_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">put_assessment_reports_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">reset_assessment_reports_destination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_assessment_reports_destination` <a name="put_assessment_reports_destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```python
def put_assessment_reports_destination(
  value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]

---

##### `put_roles` <a name="put_roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```python
def put_roles(
  value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]

---

##### `put_scope` <a name="put_scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```python
def put_scope(
  value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]

---

##### `reset_assessment_reports_destination` <a name="reset_assessment_reports_destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```python
def reset_assessment_reports_destination() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">assessment_reports_destination</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll">roles_all</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope">scope</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">assessment_reports_destination_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">framework_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">scope_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `assessment_reports_destination`<sup>Required</sup> <a name="assessment_reports_destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```python
assessment_reports_destination: AuditmanagerAssessmentAssessmentReportsDestinationList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList">AuditmanagerAssessmentAssessmentReportsDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```python
roles: AuditmanagerAssessmentRolesList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `roles_all`<sup>Required</sup> <a name="roles_all" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesAll"></a>

```python
roles_all: AuditmanagerAssessmentRolesAllList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList">AuditmanagerAssessmentRolesAllList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```python
scope: AuditmanagerAssessmentScopeList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList">AuditmanagerAssessmentScopeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `assessment_reports_destination_input`<sup>Optional</sup> <a name="assessment_reports_destination_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```python
assessment_reports_destination_input: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `framework_id_input`<sup>Optional</sup> <a name="framework_id_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```python
framework_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```python
roles_input: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```python
scope_input: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination(
  destination: str,
  destination_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination AuditmanagerAssessment#destination}.

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}.

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  framework_id: str,
  name: str,
  roles: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]],
  assessment_reports_destination: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]] = None,
  description: str = None,
  scope: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">framework_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">assessment_reports_destination</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]</code> | assessment_reports_destination block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">scope</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]</code> | scope block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#name AuditmanagerAssessment#name}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```python
roles: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#roles AuditmanagerAssessment#roles}.

---

##### `assessment_reports_destination`<sup>Optional</sup> <a name="assessment_reports_destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```python
assessment_reports_destination: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]

assessment_reports_destination block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#description AuditmanagerAssessment#description}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```python
scope: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]

scope block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#tags AuditmanagerAssessment#tags}.

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRoles(
  role_arn: str,
  role_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">role_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}.

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}.

---

### AuditmanagerAssessmentRolesAll <a name="AuditmanagerAssessmentRolesAll" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesAll()
```


### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScope(
  aws_accounts: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsAccounts]] = None,
  aws_services: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsServices]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">aws_accounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]</code> | aws_accounts block. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">aws_services</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]</code> | aws_services block. |

---

##### `aws_accounts`<sup>Optional</sup> <a name="aws_accounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```python
aws_accounts: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]

aws_accounts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `aws_services`<sup>Optional</sup> <a name="aws_services" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```python
aws_services: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]

aws_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices(
  service_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}. |

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationList <a name="AuditmanagerAssessmentAssessmentReportsDestinationList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentAssessmentReportsDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentAssessmentReportsDestination]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>]]

---


### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerAssessmentAssessmentReportsDestination, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>, cdktf.IResolvable]

---


### AuditmanagerAssessmentRolesAllList <a name="AuditmanagerAssessmentRolesAllList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesAllList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentRolesAllOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AuditmanagerAssessmentRolesAllOutputReference <a name="AuditmanagerAssessmentRolesAllOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAllOutputReference.property.internalValue"></a>

```python
internal_value: AuditmanagerAssessmentRolesAll
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesAll">AuditmanagerAssessmentRolesAll</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]]

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_type_input`<sup>Optional</sup> <a name="role_type_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```python
role_type_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerAssessmentRoles, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>, cdktf.IResolvable]

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentScopeAwsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerAssessmentScopeAwsAccounts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>, cdktf.IResolvable]

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentScopeAwsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerAssessmentScopeAwsServices, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>, cdktf.IResolvable]

---


### AuditmanagerAssessmentScopeList <a name="AuditmanagerAssessmentScopeList" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScope]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>]]

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">put_aws_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">put_aws_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">reset_aws_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">reset_aws_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_accounts` <a name="put_aws_accounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```python
def put_aws_accounts(
  value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsAccounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]

---

##### `put_aws_services` <a name="put_aws_services" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```python
def put_aws_services(
  value: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsServices]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]

---

##### `reset_aws_accounts` <a name="reset_aws_accounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```python
def reset_aws_accounts() -> None
```

##### `reset_aws_services` <a name="reset_aws_services" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```python
def reset_aws_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">aws_accounts</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">aws_services</a></code> | <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">aws_accounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">aws_services_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_accounts`<sup>Required</sup> <a name="aws_accounts" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```python
aws_accounts: AuditmanagerAssessmentScopeAwsAccountsList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `aws_services`<sup>Required</sup> <a name="aws_services" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```python
aws_services: AuditmanagerAssessmentScopeAwsServicesList
```

- *Type:* <a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `aws_accounts_input`<sup>Optional</sup> <a name="aws_accounts_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```python
aws_accounts_input: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsAccounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]]

---

##### `aws_services_input`<sup>Optional</sup> <a name="aws_services_input" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```python
aws_services_input: typing.Union[IResolvable, typing.List[AuditmanagerAssessmentScopeAwsServices]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AuditmanagerAssessmentScope, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>, cdktf.IResolvable]

---



