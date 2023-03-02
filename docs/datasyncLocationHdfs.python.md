# `datasyncLocationHdfs` Submodule <a name="`datasyncLocationHdfs` Submodule" id="@cdktf/provider-aws.datasyncLocationHdfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationHdfs <a name="DatasyncLocationHdfs" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs aws_datasync_location_hdfs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_arns: typing.List[str],
  name_node: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]],
  authentication_type: str = None,
  block_size: typing.Union[int, float] = None,
  id: str = None,
  kerberos_keytab: str = None,
  kerberos_krb5_conf: str = None,
  kerberos_principal: str = None,
  kms_key_provider_uri: str = None,
  qop_configuration: DatasyncLocationHdfsQopConfiguration = None,
  replication_factor: typing.Union[int, float] = None,
  simple_user: str = None,
  subdirectory: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.nameNode">name_node</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]</code> | name_node block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.blockSize">block_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKeytab">kerberos_keytab</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKrb5Conf">kerberos_krb5_conf</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosPrincipal">kerberos_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kmsKeyProviderUri">kms_key_provider_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.qopConfiguration">qop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | qop_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.simpleUser">simple_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.agentArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}.

---

##### `name_node`<sup>Required</sup> <a name="name_node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.nameNode"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]

name_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.authenticationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}.

---

##### `block_size`<sup>Optional</sup> <a name="block_size" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.blockSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_keytab`<sup>Optional</sup> <a name="kerberos_keytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKeytab"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}.

---

##### `kerberos_krb5_conf`<sup>Optional</sup> <a name="kerberos_krb5_conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosKrb5Conf"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}.

---

##### `kerberos_principal`<sup>Optional</sup> <a name="kerberos_principal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kerberosPrincipal"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}.

---

##### `kms_key_provider_uri`<sup>Optional</sup> <a name="kms_key_provider_uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.kmsKeyProviderUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}.

---

##### `qop_configuration`<sup>Optional</sup> <a name="qop_configuration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.qopConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

qop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replication_factor`<sup>Optional</sup> <a name="replication_factor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.replicationFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}.

---

##### `simple_user`<sup>Optional</sup> <a name="simple_user" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.simpleUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.subdirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode">put_name_node</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration">put_qop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize">reset_block_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab">reset_kerberos_keytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf">reset_kerberos_krb5_conf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal">reset_kerberos_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri">reset_kms_key_provider_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration">reset_qop_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor">reset_replication_factor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser">reset_simple_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory">reset_subdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_name_node` <a name="put_name_node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode"></a>

```python
def put_name_node(
  value: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putNameNode.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]

---

##### `put_qop_configuration` <a name="put_qop_configuration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration"></a>

```python
def put_qop_configuration(
  data_transfer_protection: str = None,
  rpc_protection: str = None
) -> None
```

###### `data_transfer_protection`<sup>Optional</sup> <a name="data_transfer_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.dataTransferProtection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}.

---

###### `rpc_protection`<sup>Optional</sup> <a name="rpc_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.putQopConfiguration.parameter.rpcProtection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}.

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_block_size` <a name="reset_block_size" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetBlockSize"></a>

```python
def reset_block_size() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kerberos_keytab` <a name="reset_kerberos_keytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKeytab"></a>

```python
def reset_kerberos_keytab() -> None
```

##### `reset_kerberos_krb5_conf` <a name="reset_kerberos_krb5_conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosKrb5Conf"></a>

```python
def reset_kerberos_krb5_conf() -> None
```

##### `reset_kerberos_principal` <a name="reset_kerberos_principal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKerberosPrincipal"></a>

```python
def reset_kerberos_principal() -> None
```

##### `reset_kms_key_provider_uri` <a name="reset_kms_key_provider_uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetKmsKeyProviderUri"></a>

```python
def reset_kms_key_provider_uri() -> None
```

##### `reset_qop_configuration` <a name="reset_qop_configuration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetQopConfiguration"></a>

```python
def reset_qop_configuration() -> None
```

##### `reset_replication_factor` <a name="reset_replication_factor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetReplicationFactor"></a>

```python
def reset_replication_factor() -> None
```

##### `reset_simple_user` <a name="reset_simple_user" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSimpleUser"></a>

```python
def reset_simple_user() -> None
```

##### `reset_subdirectory` <a name="reset_subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetSubdirectory"></a>

```python
def reset_subdirectory() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfs.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode">name_node</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration">qop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput">agent_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput">block_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput">kerberos_keytab_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput">kerberos_krb5_conf_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput">kerberos_principal_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput">kms_key_provider_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput">name_node_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput">qop_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput">replication_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput">simple_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput">subdirectory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize">block_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab">kerberos_keytab</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf">kerberos_krb5_conf</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal">kerberos_principal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri">kms_key_provider_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser">simple_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory">subdirectory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name_node`<sup>Required</sup> <a name="name_node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNode"></a>

```python
name_node: DatasyncLocationHdfsNameNodeList
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList">DatasyncLocationHdfsNameNodeList</a>

---

##### `qop_configuration`<sup>Required</sup> <a name="qop_configuration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfiguration"></a>

```python
qop_configuration: DatasyncLocationHdfsQopConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference">DatasyncLocationHdfsQopConfigurationOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `agent_arns_input`<sup>Optional</sup> <a name="agent_arns_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArnsInput"></a>

```python
agent_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `block_size_input`<sup>Optional</sup> <a name="block_size_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSizeInput"></a>

```python
block_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kerberos_keytab_input`<sup>Optional</sup> <a name="kerberos_keytab_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytabInput"></a>

```python
kerberos_keytab_input: str
```

- *Type:* str

---

##### `kerberos_krb5_conf_input`<sup>Optional</sup> <a name="kerberos_krb5_conf_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5ConfInput"></a>

```python
kerberos_krb5_conf_input: str
```

- *Type:* str

---

##### `kerberos_principal_input`<sup>Optional</sup> <a name="kerberos_principal_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipalInput"></a>

```python
kerberos_principal_input: str
```

- *Type:* str

---

##### `kms_key_provider_uri_input`<sup>Optional</sup> <a name="kms_key_provider_uri_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUriInput"></a>

```python
kms_key_provider_uri_input: str
```

- *Type:* str

---

##### `name_node_input`<sup>Optional</sup> <a name="name_node_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.nameNodeInput"></a>

```python
name_node_input: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]

---

##### `qop_configuration_input`<sup>Optional</sup> <a name="qop_configuration_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.qopConfigurationInput"></a>

```python
qop_configuration_input: DatasyncLocationHdfsQopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---

##### `replication_factor_input`<sup>Optional</sup> <a name="replication_factor_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactorInput"></a>

```python
replication_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `simple_user_input`<sup>Optional</sup> <a name="simple_user_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUserInput"></a>

```python
simple_user_input: str
```

- *Type:* str

---

##### `subdirectory_input`<sup>Optional</sup> <a name="subdirectory_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectoryInput"></a>

```python
subdirectory_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `block_size`<sup>Required</sup> <a name="block_size" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.blockSize"></a>

```python
block_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kerberos_keytab`<sup>Required</sup> <a name="kerberos_keytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKeytab"></a>

```python
kerberos_keytab: str
```

- *Type:* str

---

##### `kerberos_krb5_conf`<sup>Required</sup> <a name="kerberos_krb5_conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosKrb5Conf"></a>

```python
kerberos_krb5_conf: str
```

- *Type:* str

---

##### `kerberos_principal`<sup>Required</sup> <a name="kerberos_principal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kerberosPrincipal"></a>

```python
kerberos_principal: str
```

- *Type:* str

---

##### `kms_key_provider_uri`<sup>Required</sup> <a name="kms_key_provider_uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.kmsKeyProviderUri"></a>

```python
kms_key_provider_uri: str
```

- *Type:* str

---

##### `replication_factor`<sup>Required</sup> <a name="replication_factor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `simple_user`<sup>Required</sup> <a name="simple_user" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.simpleUser"></a>

```python
simple_user: str
```

- *Type:* str

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationHdfsConfig <a name="DatasyncLocationHdfsConfig" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  agent_arns: typing.List[str],
  name_node: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]],
  authentication_type: str = None,
  block_size: typing.Union[int, float] = None,
  id: str = None,
  kerberos_keytab: str = None,
  kerberos_krb5_conf: str = None,
  kerberos_principal: str = None,
  kms_key_provider_uri: str = None,
  qop_configuration: DatasyncLocationHdfsQopConfiguration = None,
  replication_factor: typing.Union[int, float] = None,
  simple_user: str = None,
  subdirectory: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns">agent_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode">name_node</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]</code> | name_node block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType">authentication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize">block_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab">kerberos_keytab</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf">kerberos_krb5_conf</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal">kerberos_principal</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri">kms_key_provider_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration">qop_configuration</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | qop_configuration block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor">replication_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser">simple_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory">subdirectory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `agent_arns`<sup>Required</sup> <a name="agent_arns" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.agentArns"></a>

```python
agent_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#agent_arns DatasyncLocationHdfs#agent_arns}.

---

##### `name_node`<sup>Required</sup> <a name="name_node" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.nameNode"></a>

```python
name_node: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]

name_node block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#name_node DatasyncLocationHdfs#name_node}

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#authentication_type DatasyncLocationHdfs#authentication_type}.

---

##### `block_size`<sup>Optional</sup> <a name="block_size" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.blockSize"></a>

```python
block_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#block_size DatasyncLocationHdfs#block_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#id DatasyncLocationHdfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kerberos_keytab`<sup>Optional</sup> <a name="kerberos_keytab" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKeytab"></a>

```python
kerberos_keytab: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_keytab DatasyncLocationHdfs#kerberos_keytab}.

---

##### `kerberos_krb5_conf`<sup>Optional</sup> <a name="kerberos_krb5_conf" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosKrb5Conf"></a>

```python
kerberos_krb5_conf: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_krb5_conf DatasyncLocationHdfs#kerberos_krb5_conf}.

---

##### `kerberos_principal`<sup>Optional</sup> <a name="kerberos_principal" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kerberosPrincipal"></a>

```python
kerberos_principal: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kerberos_principal DatasyncLocationHdfs#kerberos_principal}.

---

##### `kms_key_provider_uri`<sup>Optional</sup> <a name="kms_key_provider_uri" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.kmsKeyProviderUri"></a>

```python
kms_key_provider_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#kms_key_provider_uri DatasyncLocationHdfs#kms_key_provider_uri}.

---

##### `qop_configuration`<sup>Optional</sup> <a name="qop_configuration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.qopConfiguration"></a>

```python
qop_configuration: DatasyncLocationHdfsQopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

qop_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#qop_configuration DatasyncLocationHdfs#qop_configuration}

---

##### `replication_factor`<sup>Optional</sup> <a name="replication_factor" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.replicationFactor"></a>

```python
replication_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#replication_factor DatasyncLocationHdfs#replication_factor}.

---

##### `simple_user`<sup>Optional</sup> <a name="simple_user" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.simpleUser"></a>

```python
simple_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#simple_user DatasyncLocationHdfs#simple_user}.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.subdirectory"></a>

```python
subdirectory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#subdirectory DatasyncLocationHdfs#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags DatasyncLocationHdfs#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#tags_all DatasyncLocationHdfs#tags_all}.

---

### DatasyncLocationHdfsNameNode <a name="DatasyncLocationHdfsNameNode" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsNameNode(
  hostname: str,
  port: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#port DatasyncLocationHdfs#port}. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#hostname DatasyncLocationHdfs#hostname}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#port DatasyncLocationHdfs#port}.

---

### DatasyncLocationHdfsQopConfiguration <a name="DatasyncLocationHdfsQopConfiguration" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration(
  data_transfer_protection: str = None,
  rpc_protection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection">data_transfer_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection">rpc_protection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}. |

---

##### `data_transfer_protection`<sup>Optional</sup> <a name="data_transfer_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.dataTransferProtection"></a>

```python
data_transfer_protection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#data_transfer_protection DatasyncLocationHdfs#data_transfer_protection}.

---

##### `rpc_protection`<sup>Optional</sup> <a name="rpc_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration.property.rpcProtection"></a>

```python
rpc_protection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_hdfs#rpc_protection DatasyncLocationHdfs#rpc_protection}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationHdfsNameNodeList <a name="DatasyncLocationHdfsNameNodeList" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatasyncLocationHdfsNameNodeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatasyncLocationHdfsNameNode]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>]]

---


### DatasyncLocationHdfsNameNodeOutputReference <a name="DatasyncLocationHdfsNameNodeOutputReference" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNodeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DatasyncLocationHdfsNameNode, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsNameNode">DatasyncLocationHdfsNameNode</a>, cdktf.IResolvable]

---


### DatasyncLocationHdfsQopConfigurationOutputReference <a name="DatasyncLocationHdfsQopConfigurationOutputReference" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datasync_location_hdfs

datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection">reset_data_transfer_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection">reset_rpc_protection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_data_transfer_protection` <a name="reset_data_transfer_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetDataTransferProtection"></a>

```python
def reset_data_transfer_protection() -> None
```

##### `reset_rpc_protection` <a name="reset_rpc_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.resetRpcProtection"></a>

```python
def reset_rpc_protection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput">data_transfer_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput">rpc_protection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection">data_transfer_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection">rpc_protection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_transfer_protection_input`<sup>Optional</sup> <a name="data_transfer_protection_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtectionInput"></a>

```python
data_transfer_protection_input: str
```

- *Type:* str

---

##### `rpc_protection_input`<sup>Optional</sup> <a name="rpc_protection_input" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtectionInput"></a>

```python
rpc_protection_input: str
```

- *Type:* str

---

##### `data_transfer_protection`<sup>Required</sup> <a name="data_transfer_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.dataTransferProtection"></a>

```python
data_transfer_protection: str
```

- *Type:* str

---

##### `rpc_protection`<sup>Required</sup> <a name="rpc_protection" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.rpcProtection"></a>

```python
rpc_protection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DatasyncLocationHdfsQopConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationHdfs.DatasyncLocationHdfsQopConfiguration">DatasyncLocationHdfsQopConfiguration</a>

---



