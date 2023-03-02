# `kendraDataSource` Submodule <a name="`kendraDataSource` Submodule" id="@cdktf/provider-aws.kendraDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraDataSource <a name="KendraDataSource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source aws_kendra_data_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  name: str,
  type: str,
  configuration: KendraDataSourceConfiguration = None,
  custom_document_enrichment_configuration: KendraDataSourceCustomDocumentEnrichmentConfiguration = None,
  description: str = None,
  id: str = None,
  language_code: str = None,
  role_arn: str = None,
  schedule: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KendraDataSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.customDocumentEnrichmentConfiguration">custom_document_enrichment_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | custom_document_enrichment_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.indexId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#configuration KendraDataSource#configuration}

---

##### `custom_document_enrichment_configuration`<sup>Optional</sup> <a name="custom_document_enrichment_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.customDocumentEnrichmentConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

custom_document_enrichment_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.languageCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#timeouts KendraDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration">put_custom_document_enrichment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetCustomDocumentEnrichmentConfiguration">reset_custom_document_enrichment_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetLanguageCode">reset_language_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_configuration` <a name="put_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration"></a>

```python
def put_configuration(
  s3_configuration: KendraDataSourceConfigurationS3Configuration = None,
  web_crawler_configuration: KendraDataSourceConfigurationWebCrawlerConfiguration = None
) -> None
```

###### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration.parameter.s3Configuration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}

---

###### `web_crawler_configuration`<sup>Optional</sup> <a name="web_crawler_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putConfiguration.parameter.webCrawlerConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

web_crawler_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}

---

##### `put_custom_document_enrichment_configuration` <a name="put_custom_document_enrichment_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration"></a>

```python
def put_custom_document_enrichment_configuration(
  inline_configurations: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]] = None,
  post_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration = None,
  pre_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration = None,
  role_arn: str = None
) -> None
```

###### `inline_configurations`<sup>Optional</sup> <a name="inline_configurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration.parameter.inlineConfigurations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]

inline_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}

---

###### `post_extraction_hook_configuration`<sup>Optional</sup> <a name="post_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration.parameter.postExtractionHookConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

post_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}

---

###### `pre_extraction_hook_configuration`<sup>Optional</sup> <a name="pre_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration.parameter.preExtractionHookConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

pre_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putCustomDocumentEnrichmentConfiguration.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_custom_document_enrichment_configuration` <a name="reset_custom_document_enrichment_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetCustomDocumentEnrichmentConfiguration"></a>

```python
def reset_custom_document_enrichment_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_language_code` <a name="reset_language_code" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetLanguageCode"></a>

```python
def reset_language_code() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference">KendraDataSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfiguration">custom_document_enrichment_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dataSourceId">data_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference">KendraDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configurationInput">configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfigurationInput">custom_document_enrichment_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCodeInput">language_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configuration"></a>

```python
configuration: KendraDataSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference">KendraDataSourceConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `custom_document_enrichment_configuration`<sup>Required</sup> <a name="custom_document_enrichment_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfiguration"></a>

```python
custom_document_enrichment_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference</a>

---

##### `data_source_id`<sup>Required</sup> <a name="data_source_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.dataSourceId"></a>

```python
data_source_id: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeouts"></a>

```python
timeouts: KendraDataSourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference">KendraDataSourceTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.configurationInput"></a>

```python
configuration_input: KendraDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

---

##### `custom_document_enrichment_configuration_input`<sup>Optional</sup> <a name="custom_document_enrichment_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.customDocumentEnrichmentConfigurationInput"></a>

```python
custom_document_enrichment_configuration_input: KendraDataSourceCustomDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `language_code_input`<sup>Optional</sup> <a name="language_code_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCodeInput"></a>

```python
language_code_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[KendraDataSourceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.kendraDataSource.KendraDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KendraDataSourceConfig <a name="KendraDataSourceConfig" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  index_id: str,
  name: str,
  type: str,
  configuration: KendraDataSourceConfiguration = None,
  custom_document_enrichment_configuration: KendraDataSourceCustomDocumentEnrichmentConfiguration = None,
  description: str = None,
  id: str = None,
  language_code: str = None,
  role_arn: str = None,
  schedule: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: KendraDataSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.indexId">index_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.customDocumentEnrichmentConfiguration">custom_document_enrichment_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | custom_document_enrichment_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.languageCode">language_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#index_id KendraDataSource#index_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#name KendraDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#type KendraDataSource#type}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.configuration"></a>

```python
configuration: KendraDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#configuration KendraDataSource#configuration}

---

##### `custom_document_enrichment_configuration`<sup>Optional</sup> <a name="custom_document_enrichment_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.customDocumentEnrichmentConfiguration"></a>

```python
custom_document_enrichment_configuration: KendraDataSourceCustomDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

custom_document_enrichment_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#custom_document_enrichment_configuration KendraDataSource#custom_document_enrichment_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#description KendraDataSource#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#id KendraDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `language_code`<sup>Optional</sup> <a name="language_code" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#language_code KendraDataSource#language_code}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#schedule KendraDataSource#schedule}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags KendraDataSource#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#tags_all KendraDataSource#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfig.property.timeouts"></a>

```python
timeouts: KendraDataSourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#timeouts KendraDataSource#timeouts}

---

### KendraDataSourceConfiguration <a name="KendraDataSourceConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfiguration(
  s3_configuration: KendraDataSourceConfigurationS3Configuration = None,
  web_crawler_configuration: KendraDataSourceConfigurationWebCrawlerConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | s3_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.webCrawlerConfiguration">web_crawler_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | web_crawler_configuration block. |

---

##### `s3_configuration`<sup>Optional</sup> <a name="s3_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.s3Configuration"></a>

```python
s3_configuration: KendraDataSourceConfigurationS3Configuration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_configuration KendraDataSource#s3_configuration}

---

##### `web_crawler_configuration`<sup>Optional</sup> <a name="web_crawler_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration.property.webCrawlerConfiguration"></a>

```python
web_crawler_configuration: KendraDataSourceConfigurationWebCrawlerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

web_crawler_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_configuration KendraDataSource#web_crawler_configuration}

---

### KendraDataSourceConfigurationS3Configuration <a name="KendraDataSourceConfigurationS3Configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3Configuration(
  bucket_name: str,
  access_control_list_configuration: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration = None,
  documents_metadata_configuration: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration = None,
  exclusion_patterns: typing.List[str] = None,
  inclusion_patterns: typing.List[str] = None,
  inclusion_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.accessControlListConfiguration">access_control_list_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | access_control_list_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.documentsMetadataConfiguration">documents_metadata_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | documents_metadata_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.exclusionPatterns">exclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPatterns">inclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}. |

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}.

---

##### `access_control_list_configuration`<sup>Optional</sup> <a name="access_control_list_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.accessControlListConfiguration"></a>

```python
access_control_list_configuration: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

access_control_list_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}

---

##### `documents_metadata_configuration`<sup>Optional</sup> <a name="documents_metadata_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.documentsMetadataConfiguration"></a>

```python
documents_metadata_configuration: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

documents_metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}

---

##### `exclusion_patterns`<sup>Optional</sup> <a name="exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.exclusionPatterns"></a>

```python
exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}.

---

##### `inclusion_patterns`<sup>Optional</sup> <a name="inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPatterns"></a>

```python
inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}.

---

##### `inclusion_prefixes`<sup>Optional</sup> <a name="inclusion_prefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}.

---

### KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration <a name="KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration(
  key_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.property.keyPath">key_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}. |

---

##### `key_path`<sup>Optional</sup> <a name="key_path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration.property.keyPath"></a>

```python
key_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}.

---

### KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration <a name="KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration(
  s3_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}. |

---

##### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}.

---

### KendraDataSourceConfigurationWebCrawlerConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration(
  urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrls,
  authentication_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration = None,
  crawl_depth: typing.Union[int, float] = None,
  max_content_size_per_page_in_mega_bytes: typing.Union[int, float] = None,
  max_links_per_page: typing.Union[int, float] = None,
  max_urls_per_minute_crawl_rate: typing.Union[int, float] = None,
  proxy_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration = None,
  url_exclusion_patterns: typing.List[str] = None,
  url_inclusion_patterns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urls">urls</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | urls block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.crawlDepth">crawl_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxContentSizePerPageInMegaBytes">max_content_size_per_page_in_mega_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxLinksPerPage">max_links_per_page</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxUrlsPerMinuteCrawlRate">max_urls_per_minute_crawl_rate</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.proxyConfiguration">proxy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | proxy_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlExclusionPatterns">url_exclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlInclusionPatterns">url_inclusion_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}. |

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urls"></a>

```python
urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrls
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

urls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#urls KendraDataSource#urls}

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.authenticationConfiguration"></a>

```python
authentication_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}

---

##### `crawl_depth`<sup>Optional</sup> <a name="crawl_depth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.crawlDepth"></a>

```python
crawl_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}.

---

##### `max_content_size_per_page_in_mega_bytes`<sup>Optional</sup> <a name="max_content_size_per_page_in_mega_bytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxContentSizePerPageInMegaBytes"></a>

```python
max_content_size_per_page_in_mega_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}.

---

##### `max_links_per_page`<sup>Optional</sup> <a name="max_links_per_page" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxLinksPerPage"></a>

```python
max_links_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}.

---

##### `max_urls_per_minute_crawl_rate`<sup>Optional</sup> <a name="max_urls_per_minute_crawl_rate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.maxUrlsPerMinuteCrawlRate"></a>

```python
max_urls_per_minute_crawl_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}.

---

##### `proxy_configuration`<sup>Optional</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.proxyConfiguration"></a>

```python
proxy_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}

---

##### `url_exclusion_patterns`<sup>Optional</sup> <a name="url_exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlExclusionPatterns"></a>

```python
url_exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}.

---

##### `url_inclusion_patterns`<sup>Optional</sup> <a name="url_inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration.property.urlInclusionPatterns"></a>

```python
url_inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration(
  basic_authentication: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.property.basicAuthentication">basic_authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]</code> | basic_authentication block. |

---

##### `basic_authentication`<sup>Optional</sup> <a name="basic_authentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration.property.basicAuthentication"></a>

```python
basic_authentication: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]

basic_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}

---

### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication(
  credentials: str,
  host: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}.

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration(
  host: str,
  port: typing.Union[int, float],
  credentials: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrls <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls(
  seed_url_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration = None,
  site_maps_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.seedUrlConfiguration">seed_url_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | seed_url_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.siteMapsConfiguration">site_maps_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | site_maps_configuration block. |

---

##### `seed_url_configuration`<sup>Optional</sup> <a name="seed_url_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.seedUrlConfiguration"></a>

```python
seed_url_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

seed_url_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}

---

##### `site_maps_configuration`<sup>Optional</sup> <a name="site_maps_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls.property.siteMapsConfiguration"></a>

```python
site_maps_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

site_maps_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration(
  seed_urls: typing.List[str],
  web_crawler_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.seedUrls">seed_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.webCrawlerMode">web_crawler_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}. |

---

##### `seed_urls`<sup>Required</sup> <a name="seed_urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.seedUrls"></a>

```python
seed_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}.

---

##### `web_crawler_mode`<sup>Optional</sup> <a name="web_crawler_mode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration.property.webCrawlerMode"></a>

```python
web_crawler_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}.

---

### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration(
  site_maps: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.property.siteMaps">site_maps</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}. |

---

##### `site_maps`<sup>Required</sup> <a name="site_maps" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration.property.siteMaps"></a>

```python
site_maps: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}.

---

### KendraDataSourceCustomDocumentEnrichmentConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration(
  inline_configurations: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]] = None,
  post_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration = None,
  pre_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration = None,
  role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.inlineConfigurations">inline_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]</code> | inline_configurations block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration">post_extraction_hook_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | post_extraction_hook_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration">pre_extraction_hook_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | pre_extraction_hook_configuration block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}. |

---

##### `inline_configurations`<sup>Optional</sup> <a name="inline_configurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.inlineConfigurations"></a>

```python
inline_configurations: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]

inline_configurations block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inline_configurations KendraDataSource#inline_configurations}

---

##### `post_extraction_hook_configuration`<sup>Optional</sup> <a name="post_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.postExtractionHookConfiguration"></a>

```python
post_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

post_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#post_extraction_hook_configuration KendraDataSource#post_extraction_hook_configuration}

---

##### `pre_extraction_hook_configuration`<sup>Optional</sup> <a name="pre_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.preExtractionHookConfiguration"></a>

```python
pre_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

pre_extraction_hook_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#pre_extraction_hook_configuration KendraDataSource#pre_extraction_hook_configuration}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#role_arn KendraDataSource#role_arn}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations(
  condition: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition = None,
  document_content_deletion: typing.Union[bool, IResolvable] = None,
  target: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentDeletion">document_content_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | target block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.condition"></a>

```python
condition: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition KendraDataSource#condition}

---

##### `document_content_deletion`<sup>Optional</sup> <a name="document_content_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.documentContentDeletion"></a>

```python
document_content_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#document_content_deletion KendraDataSource#document_content_deletion}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations.property.target"></a>

```python
target: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target KendraDataSource#target}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget(
  target_document_attribute_key: str = None,
  target_document_attribute_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue = None,
  target_document_attribute_value_deletion: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeKey">target_document_attribute_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValue">target_document_attribute_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | target_document_attribute_value block. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValueDeletion">target_document_attribute_value_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}. |

---

##### `target_document_attribute_key`<sup>Optional</sup> <a name="target_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeKey"></a>

```python
target_document_attribute_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}.

---

##### `target_document_attribute_value`<sup>Optional</sup> <a name="target_document_attribute_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValue"></a>

```python
target_document_attribute_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

target_document_attribute_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}

---

##### `target_document_attribute_value_deletion`<sup>Optional</sup> <a name="target_document_attribute_value_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget.property.targetDocumentAttributeValueDeletion"></a>

```python
target_document_attribute_value_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration(
  lambda_arn: str,
  s3_bucket: str,
  invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | invocation_condition block. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

##### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration.property.invocationCondition"></a>

```python
invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration(
  lambda_arn: str,
  s3_bucket: str,
  invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | invocation_condition block. |

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

##### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration.property.invocationCondition"></a>

```python
invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | condition_on_value block. |

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

##### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue">date_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}. |

---

##### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

##### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

##### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

### KendraDataSourceTimeouts <a name="KendraDataSourceTimeouts" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#create KendraDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#delete KendraDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#update KendraDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KendraDataSourceConfigurationOutputReference <a name="KendraDataSourceConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration">put_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration">put_web_crawler_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetS3Configuration">reset_s3_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetWebCrawlerConfiguration">reset_web_crawler_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3_configuration` <a name="put_s3_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration"></a>

```python
def put_s3_configuration(
  bucket_name: str,
  access_control_list_configuration: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration = None,
  documents_metadata_configuration: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration = None,
  exclusion_patterns: typing.List[str] = None,
  inclusion_patterns: typing.List[str] = None,
  inclusion_prefixes: typing.List[str] = None
) -> None
```

###### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#bucket_name KendraDataSource#bucket_name}.

---

###### `access_control_list_configuration`<sup>Optional</sup> <a name="access_control_list_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.accessControlListConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

access_control_list_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#access_control_list_configuration KendraDataSource#access_control_list_configuration}

---

###### `documents_metadata_configuration`<sup>Optional</sup> <a name="documents_metadata_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.documentsMetadataConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

documents_metadata_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#documents_metadata_configuration KendraDataSource#documents_metadata_configuration}

---

###### `exclusion_patterns`<sup>Optional</sup> <a name="exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.exclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#exclusion_patterns KendraDataSource#exclusion_patterns}.

---

###### `inclusion_patterns`<sup>Optional</sup> <a name="inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.inclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_patterns KendraDataSource#inclusion_patterns}.

---

###### `inclusion_prefixes`<sup>Optional</sup> <a name="inclusion_prefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putS3Configuration.parameter.inclusionPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#inclusion_prefixes KendraDataSource#inclusion_prefixes}.

---

##### `put_web_crawler_configuration` <a name="put_web_crawler_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration"></a>

```python
def put_web_crawler_configuration(
  urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrls,
  authentication_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration = None,
  crawl_depth: typing.Union[int, float] = None,
  max_content_size_per_page_in_mega_bytes: typing.Union[int, float] = None,
  max_links_per_page: typing.Union[int, float] = None,
  max_urls_per_minute_crawl_rate: typing.Union[int, float] = None,
  proxy_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration = None,
  url_exclusion_patterns: typing.List[str] = None,
  url_inclusion_patterns: typing.List[str] = None
) -> None
```

###### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.urls"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

urls block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#urls KendraDataSource#urls}

---

###### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#authentication_configuration KendraDataSource#authentication_configuration}

---

###### `crawl_depth`<sup>Optional</sup> <a name="crawl_depth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.crawlDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#crawl_depth KendraDataSource#crawl_depth}.

---

###### `max_content_size_per_page_in_mega_bytes`<sup>Optional</sup> <a name="max_content_size_per_page_in_mega_bytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.maxContentSizePerPageInMegaBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_content_size_per_page_in_mega_bytes KendraDataSource#max_content_size_per_page_in_mega_bytes}.

---

###### `max_links_per_page`<sup>Optional</sup> <a name="max_links_per_page" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.maxLinksPerPage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_links_per_page KendraDataSource#max_links_per_page}.

---

###### `max_urls_per_minute_crawl_rate`<sup>Optional</sup> <a name="max_urls_per_minute_crawl_rate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.maxUrlsPerMinuteCrawlRate"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#max_urls_per_minute_crawl_rate KendraDataSource#max_urls_per_minute_crawl_rate}.

---

###### `proxy_configuration`<sup>Optional</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.proxyConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

proxy_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#proxy_configuration KendraDataSource#proxy_configuration}

---

###### `url_exclusion_patterns`<sup>Optional</sup> <a name="url_exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.urlExclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_exclusion_patterns KendraDataSource#url_exclusion_patterns}.

---

###### `url_inclusion_patterns`<sup>Optional</sup> <a name="url_inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.urlInclusionPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#url_inclusion_patterns KendraDataSource#url_inclusion_patterns}.

---

##### `reset_s3_configuration` <a name="reset_s3_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetS3Configuration"></a>

```python
def reset_s3_configuration() -> None
```

##### `reset_web_crawler_configuration` <a name="reset_web_crawler_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.resetWebCrawlerConfiguration"></a>

```python
def reset_web_crawler_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3Configuration">s3_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfiguration">web_crawler_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3ConfigurationInput">s3_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfigurationInput">web_crawler_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_configuration`<sup>Required</sup> <a name="s3_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3Configuration"></a>

```python
s3_configuration: KendraDataSourceConfigurationS3ConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationOutputReference</a>

---

##### `web_crawler_configuration`<sup>Required</sup> <a name="web_crawler_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```python
web_crawler_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `s3_configuration_input`<sup>Optional</sup> <a name="s3_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.s3ConfigurationInput"></a>

```python
s3_configuration_input: KendraDataSourceConfigurationS3Configuration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

---

##### `web_crawler_configuration_input`<sup>Optional</sup> <a name="web_crawler_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.webCrawlerConfigurationInput"></a>

```python
web_crawler_configuration_input: KendraDataSourceConfigurationWebCrawlerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfiguration">KendraDataSourceConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resetKeyPath">reset_key_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key_path` <a name="reset_key_path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.resetKeyPath"></a>

```python
def reset_key_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPathInput">key_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPath">key_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_path_input`<sup>Optional</sup> <a name="key_path_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPathInput"></a>

```python
key_path_input: str
```

- *Type:* str

---

##### `key_path`<sup>Required</sup> <a name="key_path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.keyPath"></a>

```python
key_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resetS3Prefix">reset_s3_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_prefix` <a name="reset_s3_prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.resetS3Prefix"></a>

```python
def reset_s3_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3PrefixInput">s3_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3Prefix">s3_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_prefix_input`<sup>Optional</sup> <a name="s3_prefix_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3PrefixInput"></a>

```python
s3_prefix_input: str
```

- *Type:* str

---

##### `s3_prefix`<sup>Required</sup> <a name="s3_prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.s3Prefix"></a>

```python
s3_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

---


### KendraDataSourceConfigurationS3ConfigurationOutputReference <a name="KendraDataSourceConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration">put_access_control_list_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration">put_documents_metadata_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetAccessControlListConfiguration">reset_access_control_list_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetDocumentsMetadataConfiguration">reset_documents_metadata_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetExclusionPatterns">reset_exclusion_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPatterns">reset_inclusion_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes">reset_inclusion_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_control_list_configuration` <a name="put_access_control_list_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration"></a>

```python
def put_access_control_list_configuration(
  key_path: str = None
) -> None
```

###### `key_path`<sup>Optional</sup> <a name="key_path" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putAccessControlListConfiguration.parameter.keyPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#key_path KendraDataSource#key_path}.

---

##### `put_documents_metadata_configuration` <a name="put_documents_metadata_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration"></a>

```python
def put_documents_metadata_configuration(
  s3_prefix: str = None
) -> None
```

###### `s3_prefix`<sup>Optional</sup> <a name="s3_prefix" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.putDocumentsMetadataConfiguration.parameter.s3Prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_prefix KendraDataSource#s3_prefix}.

---

##### `reset_access_control_list_configuration` <a name="reset_access_control_list_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetAccessControlListConfiguration"></a>

```python
def reset_access_control_list_configuration() -> None
```

##### `reset_documents_metadata_configuration` <a name="reset_documents_metadata_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetDocumentsMetadataConfiguration"></a>

```python
def reset_documents_metadata_configuration() -> None
```

##### `reset_exclusion_patterns` <a name="reset_exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetExclusionPatterns"></a>

```python
def reset_exclusion_patterns() -> None
```

##### `reset_inclusion_patterns` <a name="reset_inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPatterns"></a>

```python
def reset_inclusion_patterns() -> None
```

##### `reset_inclusion_prefixes` <a name="reset_inclusion_prefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.resetInclusionPrefixes"></a>

```python
def reset_inclusion_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfiguration">access_control_list_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfiguration">documents_metadata_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfigurationInput">access_control_list_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfigurationInput">documents_metadata_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatternsInput">exclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatternsInput">inclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput">inclusion_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatterns">exclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatterns">inclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes">inclusion_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_list_configuration`<sup>Required</sup> <a name="access_control_list_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfiguration"></a>

```python
access_control_list_configuration: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfigurationOutputReference</a>

---

##### `documents_metadata_configuration`<sup>Required</sup> <a name="documents_metadata_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfiguration"></a>

```python
documents_metadata_configuration: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfigurationOutputReference</a>

---

##### `access_control_list_configuration_input`<sup>Optional</sup> <a name="access_control_list_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.accessControlListConfigurationInput"></a>

```python
access_control_list_configuration_input: KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration">KendraDataSourceConfigurationS3ConfigurationAccessControlListConfiguration</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `documents_metadata_configuration_input`<sup>Optional</sup> <a name="documents_metadata_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.documentsMetadataConfigurationInput"></a>

```python
documents_metadata_configuration_input: KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration">KendraDataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration</a>

---

##### `exclusion_patterns_input`<sup>Optional</sup> <a name="exclusion_patterns_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatternsInput"></a>

```python
exclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_patterns_input`<sup>Optional</sup> <a name="inclusion_patterns_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatternsInput"></a>

```python
inclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_prefixes_input`<sup>Optional</sup> <a name="inclusion_prefixes_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixesInput"></a>

```python
inclusion_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `exclusion_patterns`<sup>Required</sup> <a name="exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.exclusionPatterns"></a>

```python
exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_patterns`<sup>Required</sup> <a name="inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPatterns"></a>

```python
inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `inclusion_prefixes`<sup>Required</sup> <a name="inclusion_prefixes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.inclusionPrefixes"></a>

```python
inclusion_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationS3Configuration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationS3Configuration">KendraDataSourceConfigurationS3Configuration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>, cdktf.IResolvable]

---


### KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication">put_basic_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resetBasicAuthentication">reset_basic_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_authentication` <a name="put_basic_authentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication"></a>

```python
def put_basic_authentication(
  value: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.putBasicAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]

---

##### `reset_basic_authentication` <a name="reset_basic_authentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.resetBasicAuthentication"></a>

```python
def reset_basic_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthentication">basic_authentication</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthenticationInput">basic_authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_authentication`<sup>Required</sup> <a name="basic_authentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthentication"></a>

```python
basic_authentication: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthenticationList</a>

---

##### `basic_authentication_input`<sup>Optional</sup> <a name="basic_authentication_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.basicAuthenticationInput"></a>

```python
basic_authentication_input: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration">put_proxy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls">put_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlDepth">reset_crawl_depth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxContentSizePerPageInMegaBytes">reset_max_content_size_per_page_in_mega_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxLinksPerPage">reset_max_links_per_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxUrlsPerMinuteCrawlRate">reset_max_urls_per_minute_crawl_rate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetProxyConfiguration">reset_proxy_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlExclusionPatterns">reset_url_exclusion_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlInclusionPatterns">reset_url_inclusion_patterns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  basic_authentication: typing.Union[IResolvable, typing.List[KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication]] = None
) -> None
```

###### `basic_authentication`<sup>Optional</sup> <a name="basic_authentication" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putAuthenticationConfiguration.parameter.basicAuthentication"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationBasicAuthentication</a>]]

basic_authentication block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#basic_authentication KendraDataSource#basic_authentication}

---

##### `put_proxy_configuration` <a name="put_proxy_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration"></a>

```python
def put_proxy_configuration(
  host: str,
  port: typing.Union[int, float],
  credentials: str = None
) -> None
```

###### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#host KendraDataSource#host}.

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#port KendraDataSource#port}.

---

###### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putProxyConfiguration.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#credentials KendraDataSource#credentials}.

---

##### `put_urls` <a name="put_urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls"></a>

```python
def put_urls(
  seed_url_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration = None,
  site_maps_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration = None
) -> None
```

###### `seed_url_configuration`<sup>Optional</sup> <a name="seed_url_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls.parameter.seedUrlConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

seed_url_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_url_configuration KendraDataSource#seed_url_configuration}

---

###### `site_maps_configuration`<sup>Optional</sup> <a name="site_maps_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.putUrls.parameter.siteMapsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

site_maps_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps_configuration KendraDataSource#site_maps_configuration}

---

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_crawl_depth` <a name="reset_crawl_depth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlDepth"></a>

```python
def reset_crawl_depth() -> None
```

##### `reset_max_content_size_per_page_in_mega_bytes` <a name="reset_max_content_size_per_page_in_mega_bytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxContentSizePerPageInMegaBytes"></a>

```python
def reset_max_content_size_per_page_in_mega_bytes() -> None
```

##### `reset_max_links_per_page` <a name="reset_max_links_per_page" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxLinksPerPage"></a>

```python
def reset_max_links_per_page() -> None
```

##### `reset_max_urls_per_minute_crawl_rate` <a name="reset_max_urls_per_minute_crawl_rate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetMaxUrlsPerMinuteCrawlRate"></a>

```python
def reset_max_urls_per_minute_crawl_rate() -> None
```

##### `reset_proxy_configuration` <a name="reset_proxy_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetProxyConfiguration"></a>

```python
def reset_proxy_configuration() -> None
```

##### `reset_url_exclusion_patterns` <a name="reset_url_exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlExclusionPatterns"></a>

```python
def reset_url_exclusion_patterns() -> None
```

##### `reset_url_inclusion_patterns` <a name="reset_url_inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlInclusionPatterns"></a>

```python
def reset_url_inclusion_patterns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfiguration">proxy_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urls">urls</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepthInput">crawl_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytesInput">max_content_size_per_page_in_mega_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPageInput">max_links_per_page_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRateInput">max_urls_per_minute_crawl_rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfigurationInput">proxy_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatternsInput">url_exclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatternsInput">url_inclusion_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlsInput">urls_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepth">crawl_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytes">max_content_size_per_page_in_mega_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPage">max_links_per_page</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRate">max_urls_per_minute_crawl_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatterns">url_exclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatterns">url_inclusion_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfiguration"></a>

```python
authentication_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfigurationOutputReference</a>

---

##### `proxy_configuration`<sup>Required</sup> <a name="proxy_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfiguration"></a>

```python
proxy_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference</a>

---

##### `urls`<sup>Required</sup> <a name="urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urls"></a>

```python
urls: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference</a>

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationAuthenticationConfiguration</a>

---

##### `crawl_depth_input`<sup>Optional</sup> <a name="crawl_depth_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepthInput"></a>

```python
crawl_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_content_size_per_page_in_mega_bytes_input`<sup>Optional</sup> <a name="max_content_size_per_page_in_mega_bytes_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytesInput"></a>

```python
max_content_size_per_page_in_mega_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_links_per_page_input`<sup>Optional</sup> <a name="max_links_per_page_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPageInput"></a>

```python
max_links_per_page_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_urls_per_minute_crawl_rate_input`<sup>Optional</sup> <a name="max_urls_per_minute_crawl_rate_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRateInput"></a>

```python
max_urls_per_minute_crawl_rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_configuration_input`<sup>Optional</sup> <a name="proxy_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.proxyConfigurationInput"></a>

```python
proxy_configuration_input: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

---

##### `url_exclusion_patterns_input`<sup>Optional</sup> <a name="url_exclusion_patterns_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatternsInput"></a>

```python
url_exclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_inclusion_patterns_input`<sup>Optional</sup> <a name="url_inclusion_patterns_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatternsInput"></a>

```python
url_inclusion_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `urls_input`<sup>Optional</sup> <a name="urls_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlsInput"></a>

```python
urls_input: KendraDataSourceConfigurationWebCrawlerConfigurationUrls
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

---

##### `crawl_depth`<sup>Required</sup> <a name="crawl_depth" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlDepth"></a>

```python
crawl_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_content_size_per_page_in_mega_bytes`<sup>Required</sup> <a name="max_content_size_per_page_in_mega_bytes" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxContentSizePerPageInMegaBytes"></a>

```python
max_content_size_per_page_in_mega_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_links_per_page`<sup>Required</sup> <a name="max_links_per_page" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxLinksPerPage"></a>

```python
max_links_per_page: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_urls_per_minute_crawl_rate`<sup>Required</sup> <a name="max_urls_per_minute_crawl_rate" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.maxUrlsPerMinuteCrawlRate"></a>

```python
max_urls_per_minute_crawl_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `url_exclusion_patterns`<sup>Required</sup> <a name="url_exclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlExclusionPatterns"></a>

```python
url_exclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_inclusion_patterns`<sup>Required</sup> <a name="url_inclusion_patterns" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlInclusionPatterns"></a>

```python
url_inclusion_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfiguration">KendraDataSourceConfigurationWebCrawlerConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resetCredentials">reset_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.resetCredentials"></a>

```python
def reset_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationProxyConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration">put_seed_url_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration">put_site_maps_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSeedUrlConfiguration">reset_seed_url_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSiteMapsConfiguration">reset_site_maps_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_seed_url_configuration` <a name="put_seed_url_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration"></a>

```python
def put_seed_url_configuration(
  seed_urls: typing.List[str],
  web_crawler_mode: str = None
) -> None
```

###### `seed_urls`<sup>Required</sup> <a name="seed_urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration.parameter.seedUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#seed_urls KendraDataSource#seed_urls}.

---

###### `web_crawler_mode`<sup>Optional</sup> <a name="web_crawler_mode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSeedUrlConfiguration.parameter.webCrawlerMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#web_crawler_mode KendraDataSource#web_crawler_mode}.

---

##### `put_site_maps_configuration` <a name="put_site_maps_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration"></a>

```python
def put_site_maps_configuration(
  site_maps: typing.List[str]
) -> None
```

###### `site_maps`<sup>Required</sup> <a name="site_maps" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.putSiteMapsConfiguration.parameter.siteMaps"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#site_maps KendraDataSource#site_maps}.

---

##### `reset_seed_url_configuration` <a name="reset_seed_url_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSeedUrlConfiguration"></a>

```python
def reset_seed_url_configuration() -> None
```

##### `reset_site_maps_configuration` <a name="reset_site_maps_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.resetSiteMapsConfiguration"></a>

```python
def reset_site_maps_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfiguration">seed_url_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfiguration">site_maps_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfigurationInput">seed_url_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfigurationInput">site_maps_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `seed_url_configuration`<sup>Required</sup> <a name="seed_url_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfiguration"></a>

```python
seed_url_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference</a>

---

##### `site_maps_configuration`<sup>Required</sup> <a name="site_maps_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfiguration"></a>

```python
site_maps_configuration: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference</a>

---

##### `seed_url_configuration_input`<sup>Optional</sup> <a name="seed_url_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.seedUrlConfigurationInput"></a>

```python
seed_url_configuration_input: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

---

##### `site_maps_configuration_input`<sup>Optional</sup> <a name="site_maps_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.siteMapsConfigurationInput"></a>

```python
site_maps_configuration_input: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfigurationUrls
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrls">KendraDataSourceConfigurationWebCrawlerConfigurationUrls</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resetWebCrawlerMode">reset_web_crawler_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_web_crawler_mode` <a name="reset_web_crawler_mode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.resetWebCrawlerMode"></a>

```python
def reset_web_crawler_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrlsInput">seed_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerModeInput">web_crawler_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrls">seed_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerMode">web_crawler_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `seed_urls_input`<sup>Optional</sup> <a name="seed_urls_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrlsInput"></a>

```python
seed_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_crawler_mode_input`<sup>Optional</sup> <a name="web_crawler_mode_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerModeInput"></a>

```python
web_crawler_mode_input: str
```

- *Type:* str

---

##### `seed_urls`<sup>Required</sup> <a name="seed_urls" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.seedUrls"></a>

```python
seed_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `web_crawler_mode`<sup>Required</sup> <a name="web_crawler_mode" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.webCrawlerMode"></a>

```python
web_crawler_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSeedUrlConfiguration</a>

---


### KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference <a name="KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMapsInput">site_maps_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMaps">site_maps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `site_maps_input`<sup>Optional</sup> <a name="site_maps_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMapsInput"></a>

```python
site_maps_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site_maps`<sup>Required</sup> <a name="site_maps" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.siteMaps"></a>

```python
site_maps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration">KendraDataSourceConfigurationWebCrawlerConfigurationUrlsSiteMapsConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue">put_condition_on_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetConditionOnValue">reset_condition_on_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_on_value` <a name="put_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue"></a>

```python
def put_condition_on_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.putConditionOnValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

##### `reset_condition_on_value` <a name="reset_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.resetConditionOnValue"></a>

```python
def reset_condition_on_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKeyInput">condition_document_attribute_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValueInput">condition_on_value_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_on_value`<sup>Required</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValueOutputReference</a>

---

##### `condition_document_attribute_key_input`<sup>Optional</sup> <a name="condition_document_attribute_key_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```python
condition_document_attribute_key_input: str
```

- *Type:* str

---

##### `condition_on_value_input`<sup>Optional</sup> <a name="condition_on_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionOnValueInput"></a>

```python
condition_on_value_input: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentDeletion">reset_document_content_deletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget">reset_target</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition"></a>

```python
def put_condition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue = None
) -> None
```

###### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.conditionDocumentAttributeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

###### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putCondition.parameter.conditionOnValue"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget"></a>

```python
def put_target(
  target_document_attribute_key: str = None,
  target_document_attribute_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue = None,
  target_document_attribute_value_deletion: typing.Union[bool, IResolvable] = None
) -> None
```

###### `target_document_attribute_key`<sup>Optional</sup> <a name="target_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.targetDocumentAttributeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_key KendraDataSource#target_document_attribute_key}.

---

###### `target_document_attribute_value`<sup>Optional</sup> <a name="target_document_attribute_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.targetDocumentAttributeValue"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

target_document_attribute_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value KendraDataSource#target_document_attribute_value}

---

###### `target_document_attribute_value_deletion`<sup>Optional</sup> <a name="target_document_attribute_value_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.putTarget.parameter.targetDocumentAttributeValueDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#target_document_attribute_value_deletion KendraDataSource#target_document_attribute_value_deletion}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_document_content_deletion` <a name="reset_document_content_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetDocumentContentDeletion"></a>

```python
def reset_document_content_deletion() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.resetTarget"></a>

```python
def reset_target() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletionInput">document_content_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletion">document_content_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.condition"></a>

```python
condition: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsConditionOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.target"></a>

```python
target: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.conditionInput"></a>

```python
condition_input: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsCondition</a>

---

##### `document_content_deletion_input`<sup>Optional</sup> <a name="document_content_deletion_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletionInput"></a>

```python
document_content_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.targetInput"></a>

```python
target_input: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---

##### `document_content_deletion`<sup>Required</sup> <a name="document_content_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.documentContentDeletion"></a>

```python
document_content_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>, cdktf.IResolvable]

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue">put_target_document_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeKey">reset_target_document_attribute_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValue">reset_target_document_attribute_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValueDeletion">reset_target_document_attribute_value_deletion</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_target_document_attribute_value` <a name="put_target_document_attribute_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue"></a>

```python
def put_target_document_attribute_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.putTargetDocumentAttributeValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

##### `reset_target_document_attribute_key` <a name="reset_target_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeKey"></a>

```python
def reset_target_document_attribute_key() -> None
```

##### `reset_target_document_attribute_value` <a name="reset_target_document_attribute_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValue"></a>

```python
def reset_target_document_attribute_value() -> None
```

##### `reset_target_document_attribute_value_deletion` <a name="reset_target_document_attribute_value_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.resetTargetDocumentAttributeValueDeletion"></a>

```python
def reset_target_document_attribute_value_deletion() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValue">target_document_attribute_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKeyInput">target_document_attribute_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletionInput">target_document_attribute_value_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueInput">target_document_attribute_value_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKey">target_document_attribute_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletion">target_document_attribute_value_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_document_attribute_value`<sup>Required</sup> <a name="target_document_attribute_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValue"></a>

```python
target_document_attribute_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference</a>

---

##### `target_document_attribute_key_input`<sup>Optional</sup> <a name="target_document_attribute_key_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKeyInput"></a>

```python
target_document_attribute_key_input: str
```

- *Type:* str

---

##### `target_document_attribute_value_deletion_input`<sup>Optional</sup> <a name="target_document_attribute_value_deletion_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletionInput"></a>

```python
target_document_attribute_value_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_document_attribute_value_input`<sup>Optional</sup> <a name="target_document_attribute_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueInput"></a>

```python
target_document_attribute_value_input: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

---

##### `target_document_attribute_key`<sup>Required</sup> <a name="target_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeKey"></a>

```python
target_document_attribute_key: str
```

- *Type:* str

---

##### `target_document_attribute_value_deletion`<sup>Required</sup> <a name="target_document_attribute_value_deletion" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.targetDocumentAttributeValueDeletion"></a>

```python
target_document_attribute_value_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTarget</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValueOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsTargetTargetDocumentAttributeValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations">put_inline_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration">put_post_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration">put_pre_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations">reset_inline_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration">reset_post_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration">reset_pre_extraction_hook_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_inline_configurations` <a name="put_inline_configurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations"></a>

```python
def put_inline_configurations(
  value: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putInlineConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]

---

##### `put_post_extraction_hook_configuration` <a name="put_post_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration"></a>

```python
def put_post_extraction_hook_configuration(
  lambda_arn: str,
  s3_bucket: str,
  invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition = None
) -> None
```

###### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

###### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPostExtractionHookConfiguration.parameter.invocationCondition"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

##### `put_pre_extraction_hook_configuration` <a name="put_pre_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration"></a>

```python
def put_pre_extraction_hook_configuration(
  lambda_arn: str,
  s3_bucket: str,
  invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition = None
) -> None
```

###### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.lambdaArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#lambda_arn KendraDataSource#lambda_arn}.

---

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#s3_bucket KendraDataSource#s3_bucket}.

---

###### `invocation_condition`<sup>Optional</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.putPreExtractionHookConfiguration.parameter.invocationCondition"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

invocation_condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#invocation_condition KendraDataSource#invocation_condition}

---

##### `reset_inline_configurations` <a name="reset_inline_configurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetInlineConfigurations"></a>

```python
def reset_inline_configurations() -> None
```

##### `reset_post_extraction_hook_configuration` <a name="reset_post_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPostExtractionHookConfiguration"></a>

```python
def reset_post_extraction_hook_configuration() -> None
```

##### `reset_pre_extraction_hook_configuration` <a name="reset_pre_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetPreExtractionHookConfiguration"></a>

```python
def reset_pre_extraction_hook_configuration() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations">inline_configurations</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration">post_extraction_hook_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration">pre_extraction_hook_configuration</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput">inline_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput">post_extraction_hook_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput">pre_extraction_hook_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `inline_configurations`<sup>Required</sup> <a name="inline_configurations" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurations"></a>

```python
inline_configurations: KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationsList</a>

---

##### `post_extraction_hook_configuration`<sup>Required</sup> <a name="post_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfiguration"></a>

```python
post_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference</a>

---

##### `pre_extraction_hook_configuration`<sup>Required</sup> <a name="pre_extraction_hook_configuration" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfiguration"></a>

```python
pre_extraction_hook_configuration: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference</a>

---

##### `inline_configurations_input`<sup>Optional</sup> <a name="inline_configurations_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.inlineConfigurationsInput"></a>

```python
inline_configurations_input: typing.Union[IResolvable, typing.List[KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations">KendraDataSourceCustomDocumentEnrichmentConfigurationInlineConfigurations</a>]]

---

##### `post_extraction_hook_configuration_input`<sup>Optional</sup> <a name="post_extraction_hook_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.postExtractionHookConfigurationInput"></a>

```python
post_extraction_hook_configuration_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---

##### `pre_extraction_hook_configuration_input`<sup>Optional</sup> <a name="pre_extraction_hook_configuration_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.preExtractionHookConfigurationInput"></a>

```python
pre_extraction_hook_configuration_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfiguration">KendraDataSourceCustomDocumentEnrichmentConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue">put_condition_on_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue">reset_condition_on_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_on_value` <a name="put_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue"></a>

```python
def put_condition_on_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

##### `reset_condition_on_value` <a name="reset_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue"></a>

```python
def reset_condition_on_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput">condition_document_attribute_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput">condition_on_value_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_on_value`<sup>Required</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a>

---

##### `condition_document_attribute_key_input`<sup>Optional</sup> <a name="condition_document_attribute_key_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```python
condition_document_attribute_key_input: str
```

- *Type:* str

---

##### `condition_on_value_input`<sup>Optional</sup> <a name="condition_on_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput"></a>

```python
condition_on_value_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition">put_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition">reset_invocation_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invocation_condition` <a name="put_invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```python
def put_invocation_condition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue = None
) -> None
```

###### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.conditionDocumentAttributeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

###### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.conditionOnValue"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

##### `reset_invocation_condition` <a name="reset_invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```python
def reset_invocation_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocation_condition_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_condition`<sup>Required</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```python
invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocation_condition_input`<sup>Optional</sup> <a name="invocation_condition_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```python
invocation_condition_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationInvocationCondition</a>

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPostExtractionHookConfiguration</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue">reset_date_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue">reset_long_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue">reset_string_list_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date_value` <a name="reset_date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetDateValue"></a>

```python
def reset_date_value() -> None
```

##### `reset_long_value` <a name="reset_long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetLongValue"></a>

```python
def reset_long_value() -> None
```

##### `reset_string_list_value` <a name="reset_string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringListValue"></a>

```python
def reset_string_list_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput">date_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput">long_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput">string_list_value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue">date_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue">long_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue">string_list_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_value_input`<sup>Optional</sup> <a name="date_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValueInput"></a>

```python
date_value_input: str
```

- *Type:* str

---

##### `long_value_input`<sup>Optional</sup> <a name="long_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValueInput"></a>

```python
long_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value_input`<sup>Optional</sup> <a name="string_list_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValueInput"></a>

```python
string_list_value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `date_value`<sup>Required</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.dateValue"></a>

```python
date_value: str
```

- *Type:* str

---

##### `long_value`<sup>Required</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.longValue"></a>

```python
long_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_list_value`<sup>Required</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringListValue"></a>

```python
string_list_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue">put_condition_on_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue">reset_condition_on_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition_on_value` <a name="put_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue"></a>

```python
def put_condition_on_value(
  date_value: str = None,
  long_value: typing.Union[int, float] = None,
  string_list_value: typing.List[str] = None,
  string_value: str = None
) -> None
```

###### `date_value`<sup>Optional</sup> <a name="date_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.dateValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#date_value KendraDataSource#date_value}.

---

###### `long_value`<sup>Optional</sup> <a name="long_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.longValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#long_value KendraDataSource#long_value}.

---

###### `string_list_value`<sup>Optional</sup> <a name="string_list_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.stringListValue"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_list_value KendraDataSource#string_list_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.putConditionOnValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#string_value KendraDataSource#string_value}.

---

##### `reset_condition_on_value` <a name="reset_condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.resetConditionOnValue"></a>

```python
def reset_condition_on_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue">condition_on_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput">condition_document_attribute_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput">condition_on_value_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey">condition_document_attribute_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_on_value`<sup>Required</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValue"></a>

```python
condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValueOutputReference</a>

---

##### `condition_document_attribute_key_input`<sup>Optional</sup> <a name="condition_document_attribute_key_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKeyInput"></a>

```python
condition_document_attribute_key_input: str
```

- *Type:* str

---

##### `condition_on_value_input`<sup>Optional</sup> <a name="condition_on_value_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionOnValueInput"></a>

```python
condition_on_value_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.conditionDocumentAttributeKey"></a>

```python
condition_document_attribute_key: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---


### KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference <a name="KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition">put_invocation_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition">reset_invocation_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invocation_condition` <a name="put_invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition"></a>

```python
def put_invocation_condition(
  condition_document_attribute_key: str,
  operator: str,
  condition_on_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue = None
) -> None
```

###### `condition_document_attribute_key`<sup>Required</sup> <a name="condition_document_attribute_key" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.conditionDocumentAttributeKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_document_attribute_key KendraDataSource#condition_document_attribute_key}.

---

###### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.operator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#operator KendraDataSource#operator}.

---

###### `condition_on_value`<sup>Optional</sup> <a name="condition_on_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.putInvocationCondition.parameter.conditionOnValue"></a>

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionConditionOnValue</a>

condition_on_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_data_source#condition_on_value KendraDataSource#condition_on_value}

---

##### `reset_invocation_condition` <a name="reset_invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.resetInvocationCondition"></a>

```python
def reset_invocation_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition">invocation_condition</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput">invocation_condition_input</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_condition`<sup>Required</sup> <a name="invocation_condition" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationCondition"></a>

```python
invocation_condition: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationConditionOutputReference</a>

---

##### `invocation_condition_input`<sup>Optional</sup> <a name="invocation_condition_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.invocationConditionInput"></a>

```python
invocation_condition_input: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationInvocationCondition</a>

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration">KendraDataSourceCustomDocumentEnrichmentConfigurationPreExtractionHookConfiguration</a>

---


### KendraDataSourceTimeoutsOutputReference <a name="KendraDataSourceTimeoutsOutputReference" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import kendra_data_source

kendraDataSource.KendraDataSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[KendraDataSourceTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.kendraDataSource.KendraDataSourceTimeouts">KendraDataSourceTimeouts</a>, cdktf.IResolvable]

---



