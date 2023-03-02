# `codepipelineWebhook` Submodule <a name="`codepipelineWebhook` Submodule" id="@cdktf/provider-aws.codepipelineWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodepipelineWebhook <a name="CodepipelineWebhook" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook aws_codepipeline_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication: str,
  filter: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]],
  name: str,
  target_action: str,
  target_pipeline: str,
  authentication_configuration: CodepipelineWebhookAuthenticationConfiguration = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication">authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction">target_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline">target_pipeline</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authentication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#filter CodepipelineWebhook#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}.

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}.

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.targetPipeline"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}.

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  allowed_ip_range: str = None,
  secret_token: str = None
) -> None
```

###### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.allowedIpRange"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}.

---

###### `secret_token`<sup>Optional</sup> <a name="secret_token" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putAuthenticationConfiguration.parameter.secretToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}.

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]

---

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput">authentication_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput">target_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput">target_pipeline_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authentication">authentication</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetAction">target_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline">target_pipeline</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfiguration"></a>

```python
authentication_configuration: CodepipelineWebhookAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference">CodepipelineWebhookAuthenticationConfigurationOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filter"></a>

```python
filter: CodepipelineWebhookFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList">CodepipelineWebhookFilterList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authenticationInput"></a>

```python
authentication_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_action_input`<sup>Optional</sup> <a name="target_action_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetActionInput"></a>

```python
target_action_input: str
```

- *Type:* str

---

##### `target_pipeline_input`<sup>Optional</sup> <a name="target_pipeline_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipelineInput"></a>

```python
target_pipeline_input: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetAction"></a>

```python
target_action: str
```

- *Type:* str

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.targetPipeline"></a>

```python
target_pipeline: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CodepipelineWebhookAuthenticationConfiguration <a name="CodepipelineWebhookAuthenticationConfiguration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration(
  allowed_ip_range: str = None,
  secret_token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange">allowed_ip_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken">secret_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}. |

---

##### `allowed_ip_range`<sup>Optional</sup> <a name="allowed_ip_range" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.allowedIpRange"></a>

```python
allowed_ip_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#allowed_ip_range CodepipelineWebhook#allowed_ip_range}.

---

##### `secret_token`<sup>Optional</sup> <a name="secret_token" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration.property.secretToken"></a>

```python
secret_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#secret_token CodepipelineWebhook#secret_token}.

---

### CodepipelineWebhookConfig <a name="CodepipelineWebhookConfig" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication: str,
  filter: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]],
  name: str,
  target_action: str,
  target_pipeline: str,
  authentication_configuration: CodepipelineWebhookAuthenticationConfiguration = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication">authentication</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction">target_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline">target_pipeline</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authentication"></a>

```python
authentication: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication CodepipelineWebhook#authentication}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#filter CodepipelineWebhook#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#name CodepipelineWebhook#name}.

---

##### `target_action`<sup>Required</sup> <a name="target_action" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetAction"></a>

```python
target_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_action CodepipelineWebhook#target_action}.

---

##### `target_pipeline`<sup>Required</sup> <a name="target_pipeline" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.targetPipeline"></a>

```python
target_pipeline: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#target_pipeline CodepipelineWebhook#target_pipeline}.

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.authenticationConfiguration"></a>

```python
authentication_configuration: CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#authentication_configuration CodepipelineWebhook#authentication_configuration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#id CodepipelineWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags CodepipelineWebhook#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#tags_all CodepipelineWebhook#tags_all}.

---

### CodepipelineWebhookFilter <a name="CodepipelineWebhookFilter" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFilter(
  json_path: str,
  match_equals: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath">json_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#json_path CodepipelineWebhook#json_path}. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals">match_equals</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}. |

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#json_path CodepipelineWebhook#json_path}.

---

##### `match_equals`<sup>Required</sup> <a name="match_equals" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter.property.matchEquals"></a>

```python
match_equals: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook#match_equals CodepipelineWebhook#match_equals}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodepipelineWebhookAuthenticationConfigurationOutputReference <a name="CodepipelineWebhookAuthenticationConfigurationOutputReference" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange">reset_allowed_ip_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken">reset_secret_token</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_ip_range` <a name="reset_allowed_ip_range" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetAllowedIpRange"></a>

```python
def reset_allowed_ip_range() -> None
```

##### `reset_secret_token` <a name="reset_secret_token" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.resetSecretToken"></a>

```python
def reset_secret_token() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput">allowed_ip_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput">secret_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange">allowed_ip_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken">secret_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_ip_range_input`<sup>Optional</sup> <a name="allowed_ip_range_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRangeInput"></a>

```python
allowed_ip_range_input: str
```

- *Type:* str

---

##### `secret_token_input`<sup>Optional</sup> <a name="secret_token_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretTokenInput"></a>

```python
secret_token_input: str
```

- *Type:* str

---

##### `allowed_ip_range`<sup>Required</sup> <a name="allowed_ip_range" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.allowedIpRange"></a>

```python
allowed_ip_range: str
```

- *Type:* str

---

##### `secret_token`<sup>Required</sup> <a name="secret_token" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.secretToken"></a>

```python
secret_token: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: CodepipelineWebhookAuthenticationConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookAuthenticationConfiguration">CodepipelineWebhookAuthenticationConfiguration</a>

---


### CodepipelineWebhookFilterList <a name="CodepipelineWebhookFilterList" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CodepipelineWebhookFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CodepipelineWebhookFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>]]

---


### CodepipelineWebhookFilterOutputReference <a name="CodepipelineWebhookFilterOutputReference" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import codepipeline_webhook

codepipelineWebhook.CodepipelineWebhookFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput">json_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput">match_equals_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath">json_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals">match_equals</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `json_path_input`<sup>Optional</sup> <a name="json_path_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPathInput"></a>

```python
json_path_input: str
```

- *Type:* str

---

##### `match_equals_input`<sup>Optional</sup> <a name="match_equals_input" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEqualsInput"></a>

```python
match_equals_input: str
```

- *Type:* str

---

##### `json_path`<sup>Required</sup> <a name="json_path" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.jsonPath"></a>

```python
json_path: str
```

- *Type:* str

---

##### `match_equals`<sup>Required</sup> <a name="match_equals" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.matchEquals"></a>

```python
match_equals: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CodepipelineWebhookFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.codepipelineWebhook.CodepipelineWebhookFilter">CodepipelineWebhookFilter</a>, cdktf.IResolvable]

---



