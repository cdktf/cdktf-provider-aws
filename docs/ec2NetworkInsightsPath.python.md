# `ec2NetworkInsightsPath` Submodule <a name="`ec2NetworkInsightsPath` Submodule" id="@cdktf/provider-aws.ec2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2NetworkInsightsPath <a name="Ec2NetworkInsightsPath" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path aws_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  protocol: str,
  source: str,
  destination_ip: str = None,
  destination_port: typing.Union[int, float] = None,
  id: str = None,
  source_ip: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationIp">destination_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `destination_ip`<sup>Optional</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.destinationPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.sourceIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp">reset_destination_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort">reset_destination_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp">reset_source_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_destination_ip` <a name="reset_destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationIp"></a>

```python
def reset_destination_ip() -> None
```

##### `reset_destination_port` <a name="reset_destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetDestinationPort"></a>

```python
def reset_destination_port() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_ip` <a name="reset_source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetSourceIp"></a>

```python
def reset_source_ip() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPath.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput">destination_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput">destination_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput">source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_ip_input`<sup>Optional</sup> <a name="destination_ip_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIpInput"></a>

```python
destination_ip_input: str
```

- *Type:* str

---

##### `destination_port_input`<sup>Optional</sup> <a name="destination_port_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPortInput"></a>

```python
destination_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `source_ip_input`<sup>Optional</sup> <a name="source_ip_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIpInput"></a>

```python
source_ip_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPath.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2NetworkInsightsPathConfig <a name="Ec2NetworkInsightsPathConfig" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ec2_network_insights_path

ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination: str,
  protocol: str,
  source: str,
  destination_ip: str = None,
  destination_port: typing.Union[int, float] = None,
  id: str = None,
  source_ip: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp">destination_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp">source_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}.

---

##### `destination_ip`<sup>Optional</sup> <a name="destination_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}.

---

##### `destination_port`<sup>Optional</sup> <a name="destination_port" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_ip`<sup>Optional</sup> <a name="source_ip" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ec2NetworkInsightsPath.Ec2NetworkInsightsPathConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}.

---



