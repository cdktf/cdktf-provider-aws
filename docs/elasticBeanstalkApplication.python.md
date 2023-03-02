# `elasticBeanstalkApplication` Submodule <a name="`elasticBeanstalkApplication` Submodule" id="@cdktf/provider-aws.elasticBeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkApplication <a name="ElasticBeanstalkApplication" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application aws_elastic_beanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplication(
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
  appversion_lifecycle: ElasticBeanstalkApplicationAppversionLifecycle = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.appversionLifecycle">appversion_lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | appversion_lifecycle block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}.

---

##### `appversion_lifecycle`<sup>Optional</sup> <a name="appversion_lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.appversionLifecycle"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

appversion_lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle">put_appversion_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle">reset_appversion_lifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_appversion_lifecycle` <a name="put_appversion_lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle"></a>

```python
def put_appversion_lifecycle(
  service_role: str,
  delete_source_from_s3: typing.Union[bool, IResolvable] = None,
  max_age_in_days: typing.Union[int, float] = None,
  max_count: typing.Union[int, float] = None
) -> None
```

###### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.serviceRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}.

---

###### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.deleteSourceFromS3"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.

---

###### `max_age_in_days`<sup>Optional</sup> <a name="max_age_in_days" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.maxAgeInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.

---

###### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.putAppversionLifecycle.parameter.maxCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}.

---

##### `reset_appversion_lifecycle` <a name="reset_appversion_lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetAppversionLifecycle"></a>

```python
def reset_appversion_lifecycle() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle">appversion_lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput">appversion_lifecycle_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `appversion_lifecycle`<sup>Required</sup> <a name="appversion_lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycle"></a>

```python
appversion_lifecycle: ElasticBeanstalkApplicationAppversionLifecycleOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference">ElasticBeanstalkApplicationAppversionLifecycleOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `appversion_lifecycle_input`<sup>Optional</sup> <a name="appversion_lifecycle_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.appversionLifecycleInput"></a>

```python
appversion_lifecycle_input: ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkApplicationAppversionLifecycle <a name="ElasticBeanstalkApplicationAppversionLifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle(
  service_role: str,
  delete_source_from_s3: typing.Union[bool, IResolvable] = None,
  max_age_in_days: typing.Union[int, float] = None,
  max_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole">service_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays">max_age_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}. |

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}.

---

##### `delete_source_from_s3`<sup>Optional</sup> <a name="delete_source_from_s3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}.

---

##### `max_age_in_days`<sup>Optional</sup> <a name="max_age_in_days" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxAgeInDays"></a>

```python
max_age_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}.

---

##### `max_count`<sup>Optional</sup> <a name="max_count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}.

---

### ElasticBeanstalkApplicationConfig <a name="ElasticBeanstalkApplicationConfig" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  appversion_lifecycle: ElasticBeanstalkApplicationAppversionLifecycle = None,
  description: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle">appversion_lifecycle</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | appversion_lifecycle block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}.

---

##### `appversion_lifecycle`<sup>Optional</sup> <a name="appversion_lifecycle" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.appversionLifecycle"></a>

```python
appversion_lifecycle: ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

appversion_lifecycle block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkApplicationAppversionLifecycleOutputReference <a name="ElasticBeanstalkApplicationAppversionLifecycleOutputReference" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_application

elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3">reset_delete_source_from_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays">reset_max_age_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount">reset_max_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delete_source_from_s3` <a name="reset_delete_source_from_s3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetDeleteSourceFromS3"></a>

```python
def reset_delete_source_from_s3() -> None
```

##### `reset_max_age_in_days` <a name="reset_max_age_in_days" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxAgeInDays"></a>

```python
def reset_max_age_in_days() -> None
```

##### `reset_max_count` <a name="reset_max_count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.resetMaxCount"></a>

```python
def reset_max_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input">delete_source_from_s3_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput">max_age_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput">max_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput">service_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3">delete_source_from_s3</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays">max_age_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount">max_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_source_from_s3_input`<sup>Optional</sup> <a name="delete_source_from_s3_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3Input"></a>

```python
delete_source_from_s3_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age_in_days_input`<sup>Optional</sup> <a name="max_age_in_days_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDaysInput"></a>

```python
max_age_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_count_input`<sup>Optional</sup> <a name="max_count_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCountInput"></a>

```python
max_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role_input`<sup>Optional</sup> <a name="service_role_input" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRoleInput"></a>

```python
service_role_input: str
```

- *Type:* str

---

##### `delete_source_from_s3`<sup>Required</sup> <a name="delete_source_from_s3" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.deleteSourceFromS3"></a>

```python
delete_source_from_s3: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_age_in_days`<sup>Required</sup> <a name="max_age_in_days" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxAgeInDays"></a>

```python
max_age_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_count`<sup>Required</sup> <a name="max_count" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.maxCount"></a>

```python
max_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycleOutputReference.property.internalValue"></a>

```python
internal_value: ElasticBeanstalkApplicationAppversionLifecycle
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkApplication.ElasticBeanstalkApplicationAppversionLifecycle">ElasticBeanstalkApplicationAppversionLifecycle</a>

---



