# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktf/provider-aws.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector aws_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetector(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datasources: GuarddutyDetectorDatasources = None,
  enable: typing.Union[bool, IResolvable] = None,
  finding_publishing_frequency: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datasources`<sup>Optional</sup> <a name="datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.datasources"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#datasources GuarddutyDetector#datasources}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `finding_publishing_frequency`<sup>Optional</sup> <a name="finding_publishing_frequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.findingPublishingFrequency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources">put_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources">reset_datasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">reset_finding_publishing_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_datasources` <a name="put_datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources"></a>

```python
def put_datasources(
  kubernetes: GuarddutyDetectorDatasourcesKubernetes = None,
  malware_protection: GuarddutyDetectorDatasourcesMalwareProtection = None,
  s3_logs: GuarddutyDetectorDatasourcesS3Logs = None
) -> None
```

###### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}

---

###### `malware_protection`<sup>Optional</sup> <a name="malware_protection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.malwareProtection"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}

---

###### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.s3Logs"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}

---

##### `reset_datasources` <a name="reset_datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetDatasources"></a>

```python
def reset_datasources() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_finding_publishing_frequency` <a name="reset_finding_publishing_frequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```python
def reset_finding_publishing_frequency() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput">datasources_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">finding_publishing_frequency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasources"></a>

```python
datasources: GuarddutyDetectorDatasourcesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a>

---

##### `datasources_input`<sup>Optional</sup> <a name="datasources_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.datasourcesInput"></a>

```python
datasources_input: GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finding_publishing_frequency_input`<sup>Optional</sup> <a name="finding_publishing_frequency_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```python
finding_publishing_frequency_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `finding_publishing_frequency`<sup>Required</sup> <a name="finding_publishing_frequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```python
finding_publishing_frequency: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datasources: GuarddutyDetectorDatasources = None,
  enable: typing.Union[bool, IResolvable] = None,
  finding_publishing_frequency: str = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources">datasources</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">finding_publishing_frequency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datasources`<sup>Optional</sup> <a name="datasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.datasources"></a>

```python
datasources: GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#datasources GuarddutyDetector#datasources}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `finding_publishing_frequency`<sup>Optional</sup> <a name="finding_publishing_frequency" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```python
finding_publishing_frequency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#id GuarddutyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags GuarddutyDetector#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#tags_all GuarddutyDetector#tags_all}.

---

### GuarddutyDetectorDatasources <a name="GuarddutyDetectorDatasources" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasources(
  kubernetes: GuarddutyDetectorDatasourcesKubernetes = None,
  malware_protection: GuarddutyDetectorDatasourcesMalwareProtection = None,
  s3_logs: GuarddutyDetectorDatasourcesS3Logs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection">malware_protection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | malware_protection block. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.kubernetes"></a>

```python
kubernetes: GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}

---

##### `malware_protection`<sup>Optional</sup> <a name="malware_protection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.malwareProtection"></a>

```python
malware_protection: GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

malware_protection block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}

---

##### `s3_logs`<sup>Optional</sup> <a name="s3_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs"></a>

```python
s3_logs: GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}

---

### GuarddutyDetectorDatasourcesKubernetes <a name="GuarddutyDetectorDatasourcesKubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes(
  audit_logs: GuarddutyDetectorDatasourcesKubernetesAuditLogs
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs">audit_logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | audit_logs block. |

---

##### `audit_logs`<sup>Required</sup> <a name="audit_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes.property.auditLogs"></a>

```python
audit_logs: GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}

---

### GuarddutyDetectorDatasourcesKubernetesAuditLogs <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs(
  enable: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesMalwareProtection <a name="GuarddutyDetectorDatasourcesMalwareProtection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection(
  scan_ec2_instance_with_findings: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings">scan_ec2_instance_with_findings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | scan_ec2_instance_with_findings block. |

---

##### `scan_ec2_instance_with_findings`<sup>Required</sup> <a name="scan_ec2_instance_with_findings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection.property.scanEc2InstanceWithFindings"></a>

```python
scan_ec2_instance_with_findings: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#scan_ec2_instance_with_findings GuarddutyDetector#scan_ec2_instance_with_findings}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings(
  ebs_volumes: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes">ebs_volumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | ebs_volumes block. |

---

##### `ebs_volumes`<sup>Required</sup> <a name="ebs_volumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings.property.ebsVolumes"></a>

```python
ebs_volumes: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}

---

### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes(
  enable: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

### GuarddutyDetectorDatasourcesS3Logs <a name="GuarddutyDetectorDatasourcesS3Logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs(
  enable: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---


### GuarddutyDetectorDatasourcesKubernetesOutputReference <a name="GuarddutyDetectorDatasourcesKubernetesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs">put_audit_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_audit_logs` <a name="put_audit_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs"></a>

```python
def put_audit_logs(
  enable: typing.Union[bool, IResolvable]
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.putAuditLogs.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs">audit_logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput">audit_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_logs`<sup>Required</sup> <a name="audit_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogs"></a>

```python
audit_logs: GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference">GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference</a>

---

##### `audit_logs_input`<sup>Optional</sup> <a name="audit_logs_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.auditLogsInput"></a>

```python
audit_logs_input: GuarddutyDetectorDatasourcesKubernetesAuditLogs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings">put_scan_ec2_instance_with_findings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scan_ec2_instance_with_findings` <a name="put_scan_ec2_instance_with_findings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings"></a>

```python
def put_scan_ec2_instance_with_findings(
  ebs_volumes: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
) -> None
```

###### `ebs_volumes`<sup>Required</sup> <a name="ebs_volumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.putScanEc2InstanceWithFindings.parameter.ebsVolumes"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

ebs_volumes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings">scan_ec2_instance_with_findings</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput">scan_ec2_instance_with_findings_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scan_ec2_instance_with_findings`<sup>Required</sup> <a name="scan_ec2_instance_with_findings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindings"></a>

```python
scan_ec2_instance_with_findings: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference</a>

---

##### `scan_ec2_instance_with_findings_input`<sup>Optional</sup> <a name="scan_ec2_instance_with_findings_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.scanEc2InstanceWithFindingsInput"></a>

```python
scan_ec2_instance_with_findings_input: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---


### GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference <a name="GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes">put_ebs_volumes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs_volumes` <a name="put_ebs_volumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes"></a>

```python
def put_ebs_volumes(
  enable: typing.Union[bool, IResolvable]
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.putEbsVolumes.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes">ebs_volumes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput">ebs_volumes_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_volumes`<sup>Required</sup> <a name="ebs_volumes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumes"></a>

```python
ebs_volumes: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference</a>

---

##### `ebs_volumes_input`<sup>Optional</sup> <a name="ebs_volumes_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.ebsVolumesInput"></a>

```python
ebs_volumes_input: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

---


### GuarddutyDetectorDatasourcesOutputReference <a name="GuarddutyDetectorDatasourcesOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes">put_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection">put_malware_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs">put_s3_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection">reset_malware_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs">reset_s3_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kubernetes` <a name="put_kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes"></a>

```python
def put_kubernetes(
  audit_logs: GuarddutyDetectorDatasourcesKubernetesAuditLogs
) -> None
```

###### `audit_logs`<sup>Required</sup> <a name="audit_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putKubernetes.parameter.auditLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesAuditLogs">GuarddutyDetectorDatasourcesKubernetesAuditLogs</a>

audit_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}

---

##### `put_malware_protection` <a name="put_malware_protection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection"></a>

```python
def put_malware_protection(
  scan_ec2_instance_with_findings: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings
) -> None
```

###### `scan_ec2_instance_with_findings`<sup>Required</sup> <a name="scan_ec2_instance_with_findings" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putMalwareProtection.parameter.scanEc2InstanceWithFindings"></a>

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings">GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings</a>

scan_ec2_instance_with_findings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#scan_ec2_instance_with_findings GuarddutyDetector#scan_ec2_instance_with_findings}

---

##### `put_s3_logs` <a name="put_s3_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs"></a>

```python
def put_s3_logs(
  enable: typing.Union[bool, IResolvable]
) -> None
```

###### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs.parameter.enable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_malware_protection` <a name="reset_malware_protection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetMalwareProtection"></a>

```python
def reset_malware_protection() -> None
```

##### `reset_s3_logs` <a name="reset_s3_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs"></a>

```python
def reset_s3_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection">malware_protection</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs">s3_logs</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput">kubernetes_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput">malware_protection_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput">s3_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetes"></a>

```python
kubernetes: GuarddutyDetectorDatasourcesKubernetesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetesOutputReference">GuarddutyDetectorDatasourcesKubernetesOutputReference</a>

---

##### `malware_protection`<sup>Required</sup> <a name="malware_protection" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtection"></a>

```python
malware_protection: GuarddutyDetectorDatasourcesMalwareProtectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtectionOutputReference">GuarddutyDetectorDatasourcesMalwareProtectionOutputReference</a>

---

##### `s3_logs`<sup>Required</sup> <a name="s3_logs" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs"></a>

```python
s3_logs: GuarddutyDetectorDatasourcesS3LogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a>

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.kubernetesInput"></a>

```python
kubernetes_input: GuarddutyDetectorDatasourcesKubernetes
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesKubernetes">GuarddutyDetectorDatasourcesKubernetes</a>

---

##### `malware_protection_input`<sup>Optional</sup> <a name="malware_protection_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.malwareProtectionInput"></a>

```python
malware_protection_input: GuarddutyDetectorDatasourcesMalwareProtection
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesMalwareProtection">GuarddutyDetectorDatasourcesMalwareProtection</a>

---

##### `s3_logs_input`<sup>Optional</sup> <a name="s3_logs_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput"></a>

```python
s3_logs_input: GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasources
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---


### GuarddutyDetectorDatasourcesS3LogsOutputReference <a name="GuarddutyDetectorDatasourcesS3LogsOutputReference" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import guardduty_detector

guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput">enable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable">enable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput"></a>

```python
enable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable"></a>

```python
enable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue"></a>

```python
internal_value: GuarddutyDetectorDatasourcesS3Logs
```

- *Type:* <a href="#@cdktf/provider-aws.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---



