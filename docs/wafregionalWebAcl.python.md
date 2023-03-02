# `wafregionalWebAcl` Submodule <a name="`wafregionalWebAcl` Submodule" id="@cdktf/provider-aws.wafregionalWebAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafregionalWebAcl <a name="WafregionalWebAcl" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl aws_wafregional_web_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: WafregionalWebAclDefaultAction,
  metric_name: str,
  name: str,
  id: str = None,
  logging_configuration: WafregionalWebAclLoggingConfiguration = None,
  rule: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.defaultAction"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#default_action WafregionalWebAcl#default_action}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.metricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.loggingConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#logging_configuration WafregionalWebAcl#logging_configuration}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule WafregionalWebAcl#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction">put_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration">put_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetLoggingConfiguration">reset_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_default_action` <a name="put_default_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction"></a>

```python
def put_default_action(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putDefaultAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

##### `put_logging_configuration` <a name="put_logging_configuration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration"></a>

```python
def put_logging_configuration(
  log_destination: str,
  redacted_fields: WafregionalWebAclLoggingConfigurationRedactedFields = None
) -> None
```

###### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration.parameter.logDestination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}.

---

###### `redacted_fields`<sup>Optional</sup> <a name="redacted_fields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putLoggingConfiguration.parameter.redactedFields"></a>

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

redacted_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#redacted_fields WafregionalWebAcl#redacted_fields}

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logging_configuration` <a name="reset_logging_configuration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetLoggingConfiguration"></a>

```python
def reset_logging_configuration() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference">WafregionalWebAclDefaultActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference">WafregionalWebAclLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList">WafregionalWebAclRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultActionInput">default_action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfigurationInput">logging_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultAction"></a>

```python
default_action: WafregionalWebAclDefaultActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference">WafregionalWebAclDefaultActionOutputReference</a>

---

##### `logging_configuration`<sup>Required</sup> <a name="logging_configuration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfiguration"></a>

```python
logging_configuration: WafregionalWebAclLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference">WafregionalWebAclLoggingConfigurationOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.rule"></a>

```python
rule: WafregionalWebAclRuleList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList">WafregionalWebAclRuleList</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.defaultActionInput"></a>

```python
default_action_input: WafregionalWebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logging_configuration_input`<sup>Optional</sup> <a name="logging_configuration_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.loggingConfigurationInput"></a>

```python
logging_configuration_input: WafregionalWebAclLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WafregionalWebAclConfig <a name="WafregionalWebAclConfig" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_action: WafregionalWebAclDefaultAction,
  metric_name: str,
  name: str,
  id: str = None,
  logging_configuration: WafregionalWebAclLoggingConfiguration = None,
  rule: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.defaultAction">default_action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.metricName">metric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.loggingConfiguration">logging_configuration</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | logging_configuration block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.defaultAction"></a>

```python
default_action: WafregionalWebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#default_action WafregionalWebAcl#default_action}

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#metric_name WafregionalWebAcl#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#name WafregionalWebAcl#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#id WafregionalWebAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logging_configuration`<sup>Optional</sup> <a name="logging_configuration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.loggingConfiguration"></a>

```python
logging_configuration: WafregionalWebAclLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

logging_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#logging_configuration WafregionalWebAcl#logging_configuration}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule WafregionalWebAcl#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags WafregionalWebAcl#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#tags_all WafregionalWebAcl#tags_all}.

---

### WafregionalWebAclDefaultAction <a name="WafregionalWebAclDefaultAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclDefaultAction(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclLoggingConfiguration <a name="WafregionalWebAclLoggingConfiguration" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfiguration(
  log_destination: str,
  redacted_fields: WafregionalWebAclLoggingConfigurationRedactedFields = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.logDestination">log_destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.redactedFields">redacted_fields</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | redacted_fields block. |

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#log_destination WafregionalWebAcl#log_destination}.

---

##### `redacted_fields`<sup>Optional</sup> <a name="redacted_fields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration.property.redactedFields"></a>

```python
redacted_fields: WafregionalWebAclLoggingConfigurationRedactedFields
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

redacted_fields block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#redacted_fields WafregionalWebAcl#redacted_fields}

---

### WafregionalWebAclLoggingConfigurationRedactedFields <a name="WafregionalWebAclLoggingConfigurationRedactedFields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields(
  field_to_match: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.property.fieldToMatch">field_to_match</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]</code> | field_to_match block. |

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields.property.fieldToMatch"></a>

```python
field_to_match: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#field_to_match WafregionalWebAcl#field_to_match}

---

### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch(
  type: str,
  data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data">data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#data WafregionalWebAcl#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch.property.data"></a>

```python
data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#data WafregionalWebAcl#data}.

---

### WafregionalWebAclRule <a name="WafregionalWebAclRule" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRule(
  priority: typing.Union[int, float],
  rule_id: str,
  action: WafregionalWebAclRuleAction = None,
  override_action: WafregionalWebAclRuleOverrideAction = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#priority WafregionalWebAcl#priority}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.ruleId">rule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule_id WafregionalWebAcl#rule_id}. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.overrideAction">override_action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | override_action block. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#priority WafregionalWebAcl#priority}.

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#rule_id WafregionalWebAcl#rule_id}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.action"></a>

```python
action: WafregionalWebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#action WafregionalWebAcl#action}

---

##### `override_action`<sup>Optional</sup> <a name="override_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.overrideAction"></a>

```python
override_action: WafregionalWebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

override_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#override_action WafregionalWebAcl#override_action}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclRuleAction <a name="WafregionalWebAclRuleAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleAction(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

### WafregionalWebAclRuleOverrideAction <a name="WafregionalWebAclRuleOverrideAction" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleOverrideAction(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafregionalWebAclDefaultActionOutputReference <a name="WafregionalWebAclDefaultActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultActionOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalWebAclDefaultAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclDefaultAction">WafregionalWebAclDefaultAction</a>

---


### WafregionalWebAclLoggingConfigurationOutputReference <a name="WafregionalWebAclLoggingConfigurationOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields">put_redacted_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resetRedactedFields">reset_redacted_fields</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_redacted_fields` <a name="put_redacted_fields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields"></a>

```python
def put_redacted_fields(
  field_to_match: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
) -> None
```

###### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.putRedactedFields.parameter.fieldToMatch"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]

field_to_match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#field_to_match WafregionalWebAcl#field_to_match}

---

##### `reset_redacted_fields` <a name="reset_redacted_fields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.resetRedactedFields"></a>

```python
def reset_redacted_fields() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFields">redacted_fields</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference">WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestinationInput">log_destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput">redacted_fields_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestination">log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redacted_fields`<sup>Required</sup> <a name="redacted_fields" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFields"></a>

```python
redacted_fields: WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference">WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference</a>

---

##### `log_destination_input`<sup>Optional</sup> <a name="log_destination_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestinationInput"></a>

```python
log_destination_input: str
```

- *Type:* str

---

##### `redacted_fields_input`<sup>Optional</sup> <a name="redacted_fields_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.redactedFieldsInput"></a>

```python
redacted_fields_input: WafregionalWebAclLoggingConfigurationRedactedFields
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

---

##### `log_destination`<sup>Required</sup> <a name="log_destination" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.logDestination"></a>

```python
log_destination: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalWebAclLoggingConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfiguration">WafregionalWebAclLoggingConfiguration</a>

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData">reset_data</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data` <a name="reset_data" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.resetData"></a>

```python
def reset_data() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>, cdktf.IResolvable]

---


### WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference <a name="WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch">put_field_to_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field_to_match` <a name="put_field_to_match" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch"></a>

```python
def put_field_to_match(
  value: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch">field_to_match</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput">field_to_match_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_to_match`<sup>Required</sup> <a name="field_to_match" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatch"></a>

```python
field_to_match: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchList</a>

---

##### `field_to_match_input`<sup>Optional</sup> <a name="field_to_match_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.fieldToMatchInput"></a>

```python
field_to_match_input: typing.Union[IResolvable, typing.List[WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch">WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFieldsOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalWebAclLoggingConfigurationRedactedFields
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclLoggingConfigurationRedactedFields">WafregionalWebAclLoggingConfigurationRedactedFields</a>

---


### WafregionalWebAclRuleActionOutputReference <a name="WafregionalWebAclRuleActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalWebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

---


### WafregionalWebAclRuleList <a name="WafregionalWebAclRuleList" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WafregionalWebAclRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WafregionalWebAclRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>]]

---


### WafregionalWebAclRuleOutputReference <a name="WafregionalWebAclRuleOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction">put_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetOverrideAction">reset_override_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction"></a>

```python
def put_action(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

##### `put_override_action` <a name="put_override_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction"></a>

```python
def put_override_action(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.putOverrideAction.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl#type WafregionalWebAcl#type}.

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_override_action` <a name="reset_override_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetOverrideAction"></a>

```python
def reset_override_action() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference">WafregionalWebAclRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideAction">override_action</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference">WafregionalWebAclRuleOverrideActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideActionInput">override_action_input</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleIdInput">rule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.action"></a>

```python
action: WafregionalWebAclRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleActionOutputReference">WafregionalWebAclRuleActionOutputReference</a>

---

##### `override_action`<sup>Required</sup> <a name="override_action" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideAction"></a>

```python
override_action: WafregionalWebAclRuleOverrideActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference">WafregionalWebAclRuleOverrideActionOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.actionInput"></a>

```python
action_input: WafregionalWebAclRuleAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleAction">WafregionalWebAclRuleAction</a>

---

##### `override_action_input`<sup>Optional</sup> <a name="override_action_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.overrideActionInput"></a>

```python
override_action_input: WafregionalWebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id_input`<sup>Optional</sup> <a name="rule_id_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleIdInput"></a>

```python
rule_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[WafregionalWebAclRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRule">WafregionalWebAclRule</a>, cdktf.IResolvable]

---


### WafregionalWebAclRuleOverrideActionOutputReference <a name="WafregionalWebAclRuleOverrideActionOutputReference" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import wafregional_web_acl

wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideActionOutputReference.property.internalValue"></a>

```python
internal_value: WafregionalWebAclRuleOverrideAction
```

- *Type:* <a href="#@cdktf/provider-aws.wafregionalWebAcl.WafregionalWebAclRuleOverrideAction">WafregionalWebAclRuleOverrideAction</a>

---



