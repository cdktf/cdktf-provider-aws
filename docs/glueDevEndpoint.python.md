# `glueDevEndpoint` Submodule <a name="`glueDevEndpoint` Submodule" id="@cdktf/provider-aws.glueDevEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueDevEndpoint <a name="GlueDevEndpoint" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint aws_glue_dev_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_dev_endpoint

glueDevEndpoint.GlueDevEndpoint(
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
  role_arn: str,
  arguments: typing.Mapping[str] = None,
  extra_jars_s3_path: str = None,
  extra_python_libs_s3_path: str = None,
  glue_version: str = None,
  id: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  number_of_workers: typing.Union[int, float] = None,
  public_key: str = None,
  public_keys: typing.List[str] = None,
  security_configuration: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.extraJarsS3Path">extra_jars_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.extraPythonLibsS3Path">extra_python_libs_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.glueVersion">glue_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.publicKeys">public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.arguments"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}.

---

##### `extra_jars_s3_path`<sup>Optional</sup> <a name="extra_jars_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.extraJarsS3Path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.

---

##### `extra_python_libs_s3_path`<sup>Optional</sup> <a name="extra_python_libs_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.extraPythonLibsS3Path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.glueVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.numberOfNodes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}.

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.publicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}.

---

##### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.publicKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}.

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.Initializer.parameter.workerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments">reset_arguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path">reset_extra_jars_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path">reset_extra_python_libs_s3_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes">reset_number_of_nodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey">reset_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys">reset_public_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_arguments` <a name="reset_arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetArguments"></a>

```python
def reset_arguments() -> None
```

##### `reset_extra_jars_s3_path` <a name="reset_extra_jars_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraJarsS3Path"></a>

```python
def reset_extra_jars_s3_path() -> None
```

##### `reset_extra_python_libs_s3_path` <a name="reset_extra_python_libs_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetExtraPythonLibsS3Path"></a>

```python
def reset_extra_python_libs_s3_path() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_number_of_nodes` <a name="reset_number_of_nodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfNodes"></a>

```python
def reset_number_of_nodes() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

##### `reset_public_keys` <a name="reset_public_keys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetPublicKeys"></a>

```python
def reset_public_keys() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import glue_dev_endpoint

glueDevEndpoint.GlueDevEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import glue_dev_endpoint

glueDevEndpoint.GlueDevEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import glue_dev_endpoint

glueDevEndpoint.GlueDevEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress">private_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress">public_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress">yarn_endpoint_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort">zeppelin_remote_spark_interpreter_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput">arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput">extra_jars_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput">extra_python_libs_s3_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput">number_of_nodes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput">public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path">extra_jars_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path">extra_python_libs_s3_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys">public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `private_address`<sup>Required</sup> <a name="private_address" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.privateAddress"></a>

```python
private_address: str
```

- *Type:* str

---

##### `public_address`<sup>Required</sup> <a name="public_address" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicAddress"></a>

```python
public_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `yarn_endpoint_address`<sup>Required</sup> <a name="yarn_endpoint_address" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.yarnEndpointAddress"></a>

```python
yarn_endpoint_address: str
```

- *Type:* str

---

##### `zeppelin_remote_spark_interpreter_port`<sup>Required</sup> <a name="zeppelin_remote_spark_interpreter_port" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.zeppelinRemoteSparkInterpreterPort"></a>

```python
zeppelin_remote_spark_interpreter_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `arguments_input`<sup>Optional</sup> <a name="arguments_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.argumentsInput"></a>

```python
arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_jars_s3_path_input`<sup>Optional</sup> <a name="extra_jars_s3_path_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3PathInput"></a>

```python
extra_jars_s3_path_input: str
```

- *Type:* str

---

##### `extra_python_libs_s3_path_input`<sup>Optional</sup> <a name="extra_python_libs_s3_path_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3PathInput"></a>

```python
extra_python_libs_s3_path_input: str
```

- *Type:* str

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `number_of_nodes_input`<sup>Optional</sup> <a name="number_of_nodes_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodesInput"></a>

```python
number_of_nodes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `public_keys_input`<sup>Optional</sup> <a name="public_keys_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeysInput"></a>

```python
public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_jars_s3_path`<sup>Required</sup> <a name="extra_jars_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraJarsS3Path"></a>

```python
extra_jars_s3_path: str
```

- *Type:* str

---

##### `extra_python_libs_s3_path`<sup>Required</sup> <a name="extra_python_libs_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.extraPythonLibsS3Path"></a>

```python
extra_python_libs_s3_path: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number_of_nodes`<sup>Required</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `public_keys`<sup>Required</sup> <a name="public_keys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.publicKeys"></a>

```python
public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueDevEndpointConfig <a name="GlueDevEndpointConfig" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import glue_dev_endpoint

glueDevEndpoint.GlueDevEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  role_arn: str,
  arguments: typing.Mapping[str] = None,
  extra_jars_s3_path: str = None,
  extra_python_libs_s3_path: str = None,
  glue_version: str = None,
  id: str = None,
  number_of_nodes: typing.Union[int, float] = None,
  number_of_workers: typing.Union[int, float] = None,
  public_key: str = None,
  public_keys: typing.List[str] = None,
  security_configuration: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments">arguments</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path">extra_jars_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path">extra_python_libs_s3_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion">glue_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes">number_of_nodes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey">public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys">public_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#name GlueDevEndpoint#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#role_arn GlueDevEndpoint#role_arn}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.arguments"></a>

```python
arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#arguments GlueDevEndpoint#arguments}.

---

##### `extra_jars_s3_path`<sup>Optional</sup> <a name="extra_jars_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraJarsS3Path"></a>

```python
extra_jars_s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_jars_s3_path GlueDevEndpoint#extra_jars_s3_path}.

---

##### `extra_python_libs_s3_path`<sup>Optional</sup> <a name="extra_python_libs_s3_path" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.extraPythonLibsS3Path"></a>

```python
extra_python_libs_s3_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#extra_python_libs_s3_path GlueDevEndpoint#extra_python_libs_s3_path}.

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#glue_version GlueDevEndpoint#glue_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#id GlueDevEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `number_of_nodes`<sup>Optional</sup> <a name="number_of_nodes" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfNodes"></a>

```python
number_of_nodes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_nodes GlueDevEndpoint#number_of_nodes}.

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#number_of_workers GlueDevEndpoint#number_of_workers}.

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_key GlueDevEndpoint#public_key}.

---

##### `public_keys`<sup>Optional</sup> <a name="public_keys" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.publicKeys"></a>

```python
public_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#public_keys GlueDevEndpoint#public_keys}.

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_configuration GlueDevEndpoint#security_configuration}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#security_group_ids GlueDevEndpoint#security_group_ids}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#subnet_id GlueDevEndpoint#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags GlueDevEndpoint#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#tags_all GlueDevEndpoint#tags_all}.

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktf/provider-aws.glueDevEndpoint.GlueDevEndpointConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_dev_endpoint#worker_type GlueDevEndpoint#worker_type}.

---



