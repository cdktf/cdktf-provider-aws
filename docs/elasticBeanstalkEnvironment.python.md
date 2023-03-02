# `elasticBeanstalkEnvironment` Submodule <a name="`elasticBeanstalkEnvironment` Submodule" id="@cdktf/provider-aws.elasticBeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkEnvironment <a name="ElasticBeanstalkEnvironment" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment aws_elastic_beanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application: str,
  name: str,
  cname_prefix: str = None,
  description: str = None,
  id: str = None,
  platform_arn: str = None,
  poll_interval: str = None,
  setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]] = None,
  solution_stack_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  template_name: str = None,
  tier: str = None,
  version_label: str = None,
  wait_for_ready_timeout: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.cnamePrefix">cname_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.platformArn">platform_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.pollInterval">poll_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.solutionStackName">solution_stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.versionLabel">version_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.waitForReadyTimeout">wait_for_ready_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.application"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `cname_prefix`<sup>Optional</sup> <a name="cname_prefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.cnamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.platformArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `poll_interval`<sup>Optional</sup> <a name="poll_interval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.pollInterval"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.setting"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.solutionStackName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.templateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.tier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.versionLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `wait_for_ready_timeout`<sup>Optional</sup> <a name="wait_for_ready_timeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.waitForReadyTimeout"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting">put_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix">reset_cname_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn">reset_platform_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval">reset_poll_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting">reset_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName">reset_solution_stack_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName">reset_template_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier">reset_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel">reset_version_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout">reset_wait_for_ready_timeout</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_setting` <a name="put_setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting"></a>

```python
def put_setting(
  value: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]

---

##### `reset_cname_prefix` <a name="reset_cname_prefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix"></a>

```python
def reset_cname_prefix() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_platform_arn` <a name="reset_platform_arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn"></a>

```python
def reset_platform_arn() -> None
```

##### `reset_poll_interval` <a name="reset_poll_interval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval"></a>

```python
def reset_poll_interval() -> None
```

##### `reset_setting` <a name="reset_setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting"></a>

```python
def reset_setting() -> None
```

##### `reset_solution_stack_name` <a name="reset_solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName"></a>

```python
def reset_solution_stack_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_template_name` <a name="reset_template_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName"></a>

```python
def reset_template_name() -> None
```

##### `reset_tier` <a name="reset_tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier"></a>

```python
def reset_tier() -> None
```

##### `reset_version_label` <a name="reset_version_label" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel"></a>

```python
def reset_version_label() -> None
```

##### `reset_wait_for_ready_timeout` <a name="reset_wait_for_ready_timeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout"></a>

```python
def reset_wait_for_ready_timeout() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings">all_settings</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups">autoscaling_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations">launch_configurations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers">load_balancers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues">queues</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting">setting</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers">triggers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput">cname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput">platform_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput">poll_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput">setting_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput">solution_stack_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput">template_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput">tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput">version_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput">wait_for_ready_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix">cname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn">platform_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval">poll_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName">template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel">version_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout">wait_for_ready_timeout</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_settings`<sup>Required</sup> <a name="all_settings" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings"></a>

```python
all_settings: ElasticBeanstalkEnvironmentAllSettingsList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `autoscaling_groups`<sup>Required</sup> <a name="autoscaling_groups" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups"></a>

```python
autoscaling_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_configurations`<sup>Required</sup> <a name="launch_configurations" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations"></a>

```python
launch_configurations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers"></a>

```python
load_balancers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues"></a>

```python
queues: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting"></a>

```python
setting: ElasticBeanstalkEnvironmentSettingList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers"></a>

```python
triggers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `cname_prefix_input`<sup>Optional</sup> <a name="cname_prefix_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput"></a>

```python
cname_prefix_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_arn_input`<sup>Optional</sup> <a name="platform_arn_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput"></a>

```python
platform_arn_input: str
```

- *Type:* str

---

##### `poll_interval_input`<sup>Optional</sup> <a name="poll_interval_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput"></a>

```python
poll_interval_input: str
```

- *Type:* str

---

##### `setting_input`<sup>Optional</sup> <a name="setting_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput"></a>

```python
setting_input: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]

---

##### `solution_stack_name_input`<sup>Optional</sup> <a name="solution_stack_name_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput"></a>

```python
solution_stack_name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_name_input`<sup>Optional</sup> <a name="template_name_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput"></a>

```python
template_name_input: str
```

- *Type:* str

---

##### `tier_input`<sup>Optional</sup> <a name="tier_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput"></a>

```python
tier_input: str
```

- *Type:* str

---

##### `version_label_input`<sup>Optional</sup> <a name="version_label_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput"></a>

```python
version_label_input: str
```

- *Type:* str

---

##### `wait_for_ready_timeout_input`<sup>Optional</sup> <a name="wait_for_ready_timeout_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput"></a>

```python
wait_for_ready_timeout_input: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `cname_prefix`<sup>Required</sup> <a name="cname_prefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix"></a>

```python
cname_prefix: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform_arn`<sup>Required</sup> <a name="platform_arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

---

##### `poll_interval`<sup>Required</sup> <a name="poll_interval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval"></a>

```python
poll_interval: str
```

- *Type:* str

---

##### `solution_stack_name`<sup>Required</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_name`<sup>Required</sup> <a name="template_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `version_label`<sup>Required</sup> <a name="version_label" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

---

##### `wait_for_ready_timeout`<sup>Required</sup> <a name="wait_for_ready_timeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout"></a>

```python
wait_for_ready_timeout: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkEnvironmentAllSettings <a name="ElasticBeanstalkEnvironmentAllSettings" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings()
```


### ElasticBeanstalkEnvironmentConfig <a name="ElasticBeanstalkEnvironmentConfig" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application: str,
  name: str,
  cname_prefix: str = None,
  description: str = None,
  id: str = None,
  platform_arn: str = None,
  poll_interval: str = None,
  setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]] = None,
  solution_stack_name: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  template_name: str = None,
  tier: str = None,
  version_label: str = None,
  wait_for_ready_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix">cname_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn">platform_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval">poll_interval</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting">setting</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]</code> | setting block. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName">solution_stack_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName">template_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel">version_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout">wait_for_ready_timeout</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application"></a>

```python
application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `cname_prefix`<sup>Optional</sup> <a name="cname_prefix" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```python
cname_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_arn`<sup>Optional</sup> <a name="platform_arn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn"></a>

```python
platform_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `poll_interval`<sup>Optional</sup> <a name="poll_interval" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval"></a>

```python
poll_interval: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting"></a>

```python
setting: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]

setting block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `solution_stack_name`<sup>Optional</sup> <a name="solution_stack_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName"></a>

```python
solution_stack_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `template_name`<sup>Optional</sup> <a name="template_name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName"></a>

```python
template_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier"></a>

```python
tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `version_label`<sup>Optional</sup> <a name="version_label" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel"></a>

```python
version_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `wait_for_ready_timeout`<sup>Optional</sup> <a name="wait_for_ready_timeout" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout"></a>

```python
wait_for_ready_timeout: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

### ElasticBeanstalkEnvironmentSetting <a name="ElasticBeanstalkEnvironmentSetting" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting(
  name: str,
  namespace: str,
  value: str,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkEnvironmentAllSettingsList <a name="ElasticBeanstalkEnvironmentAllSettingsList" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticBeanstalkEnvironmentAllSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ElasticBeanstalkEnvironmentAllSettingsOutputReference <a name="ElasticBeanstalkEnvironmentAllSettingsOutputReference" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticBeanstalkEnvironmentAllSettings
```

- *Type:* <a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a>

---


### ElasticBeanstalkEnvironmentSettingList <a name="ElasticBeanstalkEnvironmentSettingList" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticBeanstalkEnvironmentSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticBeanstalkEnvironmentSetting]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>]]

---


### ElasticBeanstalkEnvironmentSettingOutputReference <a name="ElasticBeanstalkEnvironmentSettingOutputReference" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elastic_beanstalk_environment

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticBeanstalkEnvironmentSetting, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>, cdktf.IResolvable]

---



