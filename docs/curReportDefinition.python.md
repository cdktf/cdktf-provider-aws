# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktf/provider-aws.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition aws_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cur_report_definition

curReportDefinition.CurReportDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  additional_schema_elements: typing.List[str],
  compression: str,
  format: str,
  report_name: str,
  s3_bucket: str,
  s3_region: str,
  time_unit: str,
  additional_artifacts: typing.List[str] = None,
  id: str = None,
  refresh_closed_reports: typing.Union[bool, IResolvable] = None,
  report_versioning: str = None,
  s3_prefix: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName">report_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region">s3_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports">refresh_closed_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning">report_versioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_schema_elements`<sup>Required</sup> <a name="additional_schema_elements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalSchemaElements"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.compression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.format"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.timeUnit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.additionalArtifacts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_closed_reports`<sup>Optional</sup> <a name="refresh_closed_reports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.refreshClosedReports"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `report_versioning`<sup>Optional</sup> <a name="report_versioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.reportVersioning"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.Initializer.parameter.s3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">reset_additional_artifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports">reset_refresh_closed_reports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning">reset_report_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix">reset_s3_prefix</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_additional_artifacts` <a name="reset_additional_artifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```python
def reset_additional_artifacts() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_closed_reports` <a name="reset_refresh_closed_reports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetRefreshClosedReports"></a>

```python
def reset_refresh_closed_reports() -> None
```

##### `reset_report_versioning` <a name="reset_report_versioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetReportVersioning"></a>

```python
def reset_report_versioning() -> None
```

##### `reset_s3_prefix` <a name="reset_s3_prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.resetS3Prefix"></a>

```python
def reset_s3_prefix() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cur_report_definition

curReportDefinition.CurReportDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cur_report_definition

curReportDefinition.CurReportDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cur_report_definition

curReportDefinition.CurReportDefinition.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">additional_artifacts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">additional_schema_elements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">refresh_closed_reports_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput">report_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput">report_versioning_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput">s3_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput">time_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports">refresh_closed_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName">report_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning">report_versioning</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region">s3_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit">time_unit</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `additional_artifacts_input`<sup>Optional</sup> <a name="additional_artifacts_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```python
additional_artifacts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_schema_elements_input`<sup>Optional</sup> <a name="additional_schema_elements_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```python
additional_schema_elements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `refresh_closed_reports_input`<sup>Optional</sup> <a name="refresh_closed_reports_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```python
refresh_closed_reports_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `report_name_input`<sup>Optional</sup> <a name="report_name_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```python
report_name_input: str
```

- *Type:* str

---

##### `report_versioning_input`<sup>Optional</sup> <a name="report_versioning_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```python
report_versioning_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `s3_region_input`<sup>Optional</sup> <a name="s3_region_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```python
s3_region_input: str
```

- *Type:* str

---

##### `time_unit_input`<sup>Optional</sup> <a name="time_unit_input" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```python
time_unit_input: str
```

- *Type:* str

---

##### `additional_artifacts`<sup>Required</sup> <a name="additional_artifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```python
additional_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_schema_elements`<sup>Required</sup> <a name="additional_schema_elements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```python
additional_schema_elements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `refresh_closed_reports`<sup>Required</sup> <a name="refresh_closed_reports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```python
refresh_closed_reports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

---

##### `report_versioning`<sup>Required</sup> <a name="report_versioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```python
report_versioning: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cur_report_definition

curReportDefinition.CurReportDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  additional_schema_elements: typing.List[str],
  compression: str,
  format: str,
  report_name: str,
  s3_bucket: str,
  s3_region: str,
  time_unit: str,
  additional_artifacts: typing.List[str] = None,
  id: str = None,
  refresh_closed_reports: typing.Union[bool, IResolvable] = None,
  report_versioning: str = None,
  s3_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">additional_schema_elements</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression">compression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format">format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName">report_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region">s3_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">time_unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">additional_artifacts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">refresh_closed_reports</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">report_versioning</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}. |
| <code><a href="#@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_schema_elements`<sup>Required</sup> <a name="additional_schema_elements" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```python
additional_schema_elements: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}.

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```python
compression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#compression CurReportDefinition#compression}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```python
format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#format CurReportDefinition#format}.

---

##### `report_name`<sup>Required</sup> <a name="report_name" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```python
report_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_name CurReportDefinition#report_name}.

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}.

---

##### `s3_region`<sup>Required</sup> <a name="s3_region" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```python
s3_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_region CurReportDefinition#s3_region}.

---

##### `time_unit`<sup>Required</sup> <a name="time_unit" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```python
time_unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#time_unit CurReportDefinition#time_unit}.

---

##### `additional_artifacts`<sup>Optional</sup> <a name="additional_artifacts" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```python
additional_artifacts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#id CurReportDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_closed_reports`<sup>Optional</sup> <a name="refresh_closed_reports" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```python
refresh_closed_reports: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}.

---

##### `report_versioning`<sup>Optional</sup> <a name="report_versioning" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```python
report_versioning: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#report_versioning CurReportDefinition#report_versioning}.

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}.

---



