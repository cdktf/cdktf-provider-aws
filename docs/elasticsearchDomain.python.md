# `elasticsearchDomain` Submodule <a name="`elasticsearchDomain` Submodule" id="@cdktf/provider-aws.elasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomain <a name="ElasticsearchDomain" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  access_policies: str = None,
  advanced_options: typing.Mapping[str] = None,
  advanced_security_options: ElasticsearchDomainAdvancedSecurityOptions = None,
  auto_tune_options: ElasticsearchDomainAutoTuneOptions = None,
  cluster_config: ElasticsearchDomainClusterConfig = None,
  cognito_options: ElasticsearchDomainCognitoOptions = None,
  domain_endpoint_options: ElasticsearchDomainDomainEndpointOptions = None,
  ebs_options: ElasticsearchDomainEbsOptions = None,
  elasticsearch_version: str = None,
  encrypt_at_rest: ElasticsearchDomainEncryptAtRest = None,
  id: str = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]] = None,
  node_to_node_encryption: ElasticsearchDomainNodeToNodeEncryption = None,
  snapshot_options: ElasticsearchDomainSnapshotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ElasticsearchDomainTimeouts = None,
  vpc_options: ElasticsearchDomainVpcOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.elasticsearchVersion">elasticsearch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}.

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.accessPolicies"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.advancedOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.advancedSecurityOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_security_options ElasticsearchDomain#advanced_security_options}

---

##### `auto_tune_options`<sup>Optional</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.autoTuneOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#auto_tune_options ElasticsearchDomain#auto_tune_options}

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cluster_config ElasticsearchDomain#cluster_config}

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.cognitoOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cognito_options ElasticsearchDomain#cognito_options}

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.domainEndpointOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.ebsOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_options ElasticsearchDomain#ebs_options}

---

##### `elasticsearch_version`<sup>Optional</sup> <a name="elasticsearch_version" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.elasticsearchVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}.

---

##### `encrypt_at_rest`<sup>Optional</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.encryptAtRest"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.logPublishingOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_publishing_options ElasticsearchDomain#log_publishing_options}

---

##### `node_to_node_encryption`<sup>Optional</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.nodeToNodeEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.snapshotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#snapshot_options ElasticsearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#timeouts ElasticsearchDomain#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#vpc_options ElasticsearchDomain#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions">put_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions">put_auto_tune_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig">put_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions">put_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions">put_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions">put_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest">put_encrypt_at_rest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions">put_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption">put_node_to_node_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions">put_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions">put_vpc_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies">reset_access_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions">reset_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions">reset_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions">reset_auto_tune_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig">reset_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions">reset_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions">reset_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions">reset_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion">reset_elasticsearch_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest">reset_encrypt_at_rest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions">reset_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption">reset_node_to_node_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions">reset_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions">reset_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_advanced_security_options` <a name="put_advanced_security_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions"></a>

```python
def put_advanced_security_options(
  enabled: typing.Union[bool, IResolvable],
  internal_user_database_enabled: typing.Union[bool, IResolvable] = None,
  master_user_options: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

###### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions.parameter.internalUserDatabaseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}.

---

###### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAdvancedSecurityOptions.parameter.masterUserOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_options ElasticsearchDomain#master_user_options}

---

##### `put_auto_tune_options` <a name="put_auto_tune_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions"></a>

```python
def put_auto_tune_options(
  desired_state: str,
  maintenance_schedule: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]] = None,
  rollback_on_disable: str = None
) -> None
```

###### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}.

---

###### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions.parameter.maintenanceSchedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#maintenance_schedule ElasticsearchDomain#maintenance_schedule}

---

###### `rollback_on_disable`<sup>Optional</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putAutoTuneOptions.parameter.rollbackOnDisable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}.

---

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig"></a>

```python
def put_cluster_config(
  cold_storage_options: ElasticsearchDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: typing.Union[bool, IResolvable] = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: typing.Union[bool, IResolvable] = None,
  warm_type: str = None,
  zone_awareness_config: ElasticsearchDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.coldStorageOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cold_storage_options ElasticsearchDomain#cold_storage_options}

---

###### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.dedicatedMasterCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}.

---

###### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.dedicatedMasterEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}.

---

###### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.dedicatedMasterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}.

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}.

---

###### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.warmCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}.

---

###### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.warmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}.

---

###### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.warmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}.

---

###### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.zoneAwarenessConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_config ElasticsearchDomain#zone_awareness_config}

---

###### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putClusterConfig.parameter.zoneAwarenessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}.

---

##### `put_cognito_options` <a name="put_cognito_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions"></a>

```python
def put_cognito_options(
  identity_pool_id: str,
  role_arn: str,
  user_pool_id: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}.

---

###### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putCognitoOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `put_domain_endpoint_options` <a name="put_domain_endpoint_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions"></a>

```python
def put_domain_endpoint_options(
  custom_endpoint: str = None,
  custom_endpoint_certificate_arn: str = None,
  custom_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  enforce_https: typing.Union[bool, IResolvable] = None,
  tls_security_policy: str = None
) -> None
```

###### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.customEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}.

---

###### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.customEndpointCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}.

---

###### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.customEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}.

---

###### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.enforceHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}.

---

###### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putDomainEndpointOptions.parameter.tlsSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}.

---

##### `put_ebs_options` <a name="put_ebs_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions"></a>

```python
def put_ebs_options(
  ebs_enabled: typing.Union[bool, IResolvable],
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.ebsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEbsOptions.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}.

---

##### `put_encrypt_at_rest` <a name="put_encrypt_at_rest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest"></a>

```python
def put_encrypt_at_rest(
  enabled: typing.Union[bool, IResolvable],
  kms_key_id: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putEncryptAtRest.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}.

---

##### `put_log_publishing_options` <a name="put_log_publishing_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions"></a>

```python
def put_log_publishing_options(
  value: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]

---

##### `put_node_to_node_encryption` <a name="put_node_to_node_encryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption"></a>

```python
def put_node_to_node_encryption(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putNodeToNodeEncryption.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `put_snapshot_options` <a name="put_snapshot_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions"></a>

```python
def put_snapshot_options(
  automated_snapshot_start_hour: typing.Union[int, float]
) -> None
```

###### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putSnapshotOptions.parameter.automatedSnapshotStartHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}.

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions"></a>

```python
def put_vpc_options(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.putVpcOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}.

---

##### `reset_access_policies` <a name="reset_access_policies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAccessPolicies"></a>

```python
def reset_access_policies() -> None
```

##### `reset_advanced_options` <a name="reset_advanced_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedOptions"></a>

```python
def reset_advanced_options() -> None
```

##### `reset_advanced_security_options` <a name="reset_advanced_security_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAdvancedSecurityOptions"></a>

```python
def reset_advanced_security_options() -> None
```

##### `reset_auto_tune_options` <a name="reset_auto_tune_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetAutoTuneOptions"></a>

```python
def reset_auto_tune_options() -> None
```

##### `reset_cluster_config` <a name="reset_cluster_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetClusterConfig"></a>

```python
def reset_cluster_config() -> None
```

##### `reset_cognito_options` <a name="reset_cognito_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetCognitoOptions"></a>

```python
def reset_cognito_options() -> None
```

##### `reset_domain_endpoint_options` <a name="reset_domain_endpoint_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetDomainEndpointOptions"></a>

```python
def reset_domain_endpoint_options() -> None
```

##### `reset_ebs_options` <a name="reset_ebs_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEbsOptions"></a>

```python
def reset_ebs_options() -> None
```

##### `reset_elasticsearch_version` <a name="reset_elasticsearch_version" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetElasticsearchVersion"></a>

```python
def reset_elasticsearch_version() -> None
```

##### `reset_encrypt_at_rest` <a name="reset_encrypt_at_rest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetEncryptAtRest"></a>

```python
def reset_encrypt_at_rest() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_publishing_options` <a name="reset_log_publishing_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetLogPublishingOptions"></a>

```python
def reset_log_publishing_options() -> None
```

##### `reset_node_to_node_encryption` <a name="reset_node_to_node_encryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetNodeToNodeEncryption"></a>

```python
def reset_node_to_node_encryption() -> None
```

##### `reset_snapshot_options` <a name="reset_snapshot_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetSnapshotOptions"></a>

```python
def reset_snapshot_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_options` <a name="reset_vpc_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.resetVpcOptions"></a>

```python
def reset_vpc_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint">kibana_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput">access_policies_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput">advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput">advanced_security_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput">auto_tune_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput">cluster_config_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput">cognito_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput">domain_endpoint_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput">ebs_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput">elasticsearch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput">encrypt_at_rest_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput">log_publishing_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput">node_to_node_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput">snapshot_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput">vpc_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies">access_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion">elasticsearch_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_security_options`<sup>Required</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptions"></a>

```python
advanced_security_options: ElasticsearchDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_tune_options`<sup>Required</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptions"></a>

```python
auto_tune_options: ElasticsearchDomainAutoTuneOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference">ElasticsearchDomainAutoTuneOptionsOutputReference</a>

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfig"></a>

```python
cluster_config: ElasticsearchDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference">ElasticsearchDomainClusterConfigOutputReference</a>

---

##### `cognito_options`<sup>Required</sup> <a name="cognito_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptions"></a>

```python
cognito_options: ElasticsearchDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference">ElasticsearchDomainCognitoOptionsOutputReference</a>

---

##### `domain_endpoint_options`<sup>Required</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: ElasticsearchDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference">ElasticsearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `ebs_options`<sup>Required</sup> <a name="ebs_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptions"></a>

```python
ebs_options: ElasticsearchDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference">ElasticsearchDomainEbsOptionsOutputReference</a>

---

##### `encrypt_at_rest`<sup>Required</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRest"></a>

```python
encrypt_at_rest: ElasticsearchDomainEncryptAtRestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference">ElasticsearchDomainEncryptAtRestOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kibana_endpoint`<sup>Required</sup> <a name="kibana_endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.kibanaEndpoint"></a>

```python
kibana_endpoint: str
```

- *Type:* str

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptions"></a>

```python
log_publishing_options: ElasticsearchDomainLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList">ElasticsearchDomainLogPublishingOptionsList</a>

---

##### `node_to_node_encryption`<sup>Required</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryption"></a>

```python
node_to_node_encryption: ElasticsearchDomainNodeToNodeEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference">ElasticsearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `snapshot_options`<sup>Required</sup> <a name="snapshot_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptions"></a>

```python
snapshot_options: ElasticsearchDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference">ElasticsearchDomainSnapshotOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeouts"></a>

```python
timeouts: ElasticsearchDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference">ElasticsearchDomainTimeoutsOutputReference</a>

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptions"></a>

```python
vpc_options: ElasticsearchDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference">ElasticsearchDomainVpcOptionsOutputReference</a>

---

##### `access_policies_input`<sup>Optional</sup> <a name="access_policies_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPoliciesInput"></a>

```python
access_policies_input: str
```

- *Type:* str

---

##### `advanced_options_input`<sup>Optional</sup> <a name="advanced_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptionsInput"></a>

```python
advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `advanced_security_options_input`<sup>Optional</sup> <a name="advanced_security_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedSecurityOptionsInput"></a>

```python
advanced_security_options_input: ElasticsearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---

##### `auto_tune_options_input`<sup>Optional</sup> <a name="auto_tune_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.autoTuneOptionsInput"></a>

```python
auto_tune_options_input: ElasticsearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.clusterConfigInput"></a>

```python
cluster_config_input: ElasticsearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---

##### `cognito_options_input`<sup>Optional</sup> <a name="cognito_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.cognitoOptionsInput"></a>

```python
cognito_options_input: ElasticsearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---

##### `domain_endpoint_options_input`<sup>Optional</sup> <a name="domain_endpoint_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainEndpointOptionsInput"></a>

```python
domain_endpoint_options_input: ElasticsearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `ebs_options_input`<sup>Optional</sup> <a name="ebs_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.ebsOptionsInput"></a>

```python
ebs_options_input: ElasticsearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---

##### `elasticsearch_version_input`<sup>Optional</sup> <a name="elasticsearch_version_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersionInput"></a>

```python
elasticsearch_version_input: str
```

- *Type:* str

---

##### `encrypt_at_rest_input`<sup>Optional</sup> <a name="encrypt_at_rest_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.encryptAtRestInput"></a>

```python
encrypt_at_rest_input: ElasticsearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_publishing_options_input`<sup>Optional</sup> <a name="log_publishing_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.logPublishingOptionsInput"></a>

```python
log_publishing_options_input: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]

---

##### `node_to_node_encryption_input`<sup>Optional</sup> <a name="node_to_node_encryption_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.nodeToNodeEncryptionInput"></a>

```python
node_to_node_encryption_input: ElasticsearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---

##### `snapshot_options_input`<sup>Optional</sup> <a name="snapshot_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.snapshotOptionsInput"></a>

```python
snapshot_options_input: ElasticsearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ElasticsearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.vpcOptionsInput"></a>

```python
vpc_options_input: ElasticsearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---

##### `access_policies`<sup>Required</sup> <a name="access_policies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `elasticsearch_version`<sup>Required</sup> <a name="elasticsearch_version" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.elasticsearchVersion"></a>

```python
elasticsearch_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainAdvancedSecurityOptions <a name="ElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions(
  enabled: typing.Union[bool, IResolvable],
  internal_user_database_enabled: typing.Union[bool, IResolvable] = None,
  master_user_options: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}.

---

##### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```python
master_user_options: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_options ElasticsearchDomain#master_user_options}

---

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}. |

---

##### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}.

---

##### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}.

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}.

---

### ElasticsearchDomainAutoTuneOptions <a name="ElasticsearchDomainAutoTuneOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptions(
  desired_state: str,
  maintenance_schedule: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]] = None,
  rollback_on_disable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule">maintenance_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable">rollback_on_disable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}. |

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#desired_state ElasticsearchDomain#desired_state}.

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```python
maintenance_schedule: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#maintenance_schedule ElasticsearchDomain#maintenance_schedule}

---

##### `rollback_on_disable`<sup>Optional</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```python
rollback_on_disable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#rollback_on_disable ElasticsearchDomain#rollback_on_disable}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule(
  cron_expression_for_recurrence: str,
  duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration,
  start_at: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">cron_expression_for_recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">start_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}. |

---

##### `cron_expression_for_recurrence`<sup>Required</sup> <a name="cron_expression_for_recurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```python
cron_expression_for_recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cron_expression_for_recurrence ElasticsearchDomain#cron_expression_for_recurrence}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```python
duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#duration ElasticsearchDomain#duration}

---

##### `start_at`<sup>Required</sup> <a name="start_at" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```python
start_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#start_at ElasticsearchDomain#start_at}.

---

### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}.

---

### ElasticsearchDomainClusterConfig <a name="ElasticsearchDomainClusterConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfig(
  cold_storage_options: ElasticsearchDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: typing.Union[bool, IResolvable] = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: typing.Union[bool, IResolvable] = None,
  warm_type: str = None,
  zone_awareness_config: ElasticsearchDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled">warm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType">warm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}. |

---

##### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.coldStorageOptions"></a>

```python
cold_storage_options: ElasticsearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cold_storage_options ElasticsearchDomain#cold_storage_options}

---

##### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_count ElasticsearchDomain#dedicated_master_count}.

---

##### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}.

---

##### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#dedicated_master_type ElasticsearchDomain#dedicated_master_type}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_count ElasticsearchDomain#instance_count}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#instance_type ElasticsearchDomain#instance_type}.

---

##### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_count ElasticsearchDomain#warm_count}.

---

##### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmEnabled"></a>

```python
warm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_enabled ElasticsearchDomain#warm_enabled}.

---

##### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#warm_type ElasticsearchDomain#warm_type}.

---

##### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: ElasticsearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_config ElasticsearchDomain#zone_awareness_config}

---

##### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}.

---

### ElasticsearchDomainClusterConfigColdStorageOptions <a name="ElasticsearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig(
  availability_zone_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}. |

---

##### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}.

---

### ElasticsearchDomainCognitoOptions <a name="ElasticsearchDomainCognitoOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainCognitoOptions(
  identity_pool_id: str,
  role_arn: str,
  user_pool_id: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#identity_pool_id ElasticsearchDomain#identity_pool_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#role_arn ElasticsearchDomain#role_arn}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#user_pool_id ElasticsearchDomain#user_pool_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainConfig <a name="ElasticsearchDomainConfig" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_name: str,
  access_policies: str = None,
  advanced_options: typing.Mapping[str] = None,
  advanced_security_options: ElasticsearchDomainAdvancedSecurityOptions = None,
  auto_tune_options: ElasticsearchDomainAutoTuneOptions = None,
  cluster_config: ElasticsearchDomainClusterConfig = None,
  cognito_options: ElasticsearchDomainCognitoOptions = None,
  domain_endpoint_options: ElasticsearchDomainDomainEndpointOptions = None,
  ebs_options: ElasticsearchDomainEbsOptions = None,
  elasticsearch_version: str = None,
  encrypt_at_rest: ElasticsearchDomainEncryptAtRest = None,
  id: str = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]] = None,
  node_to_node_encryption: ElasticsearchDomainNodeToNodeEncryption = None,
  snapshot_options: ElasticsearchDomainSnapshotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: ElasticsearchDomainTimeouts = None,
  vpc_options: ElasticsearchDomainVpcOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion">elasticsearch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_name ElasticsearchDomain#domain_name}.

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#access_policies ElasticsearchDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_options ElasticsearchDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.advancedSecurityOptions"></a>

```python
advanced_security_options: ElasticsearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#advanced_security_options ElasticsearchDomain#advanced_security_options}

---

##### `auto_tune_options`<sup>Optional</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.autoTuneOptions"></a>

```python
auto_tune_options: ElasticsearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#auto_tune_options ElasticsearchDomain#auto_tune_options}

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.clusterConfig"></a>

```python
cluster_config: ElasticsearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cluster_config ElasticsearchDomain#cluster_config}

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.cognitoOptions"></a>

```python
cognito_options: ElasticsearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cognito_options ElasticsearchDomain#cognito_options}

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: ElasticsearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.ebsOptions"></a>

```python
ebs_options: ElasticsearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_options ElasticsearchDomain#ebs_options}

---

##### `elasticsearch_version`<sup>Optional</sup> <a name="elasticsearch_version" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.elasticsearchVersion"></a>

```python
elasticsearch_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#elasticsearch_version ElasticsearchDomain#elasticsearch_version}.

---

##### `encrypt_at_rest`<sup>Optional</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.encryptAtRest"></a>

```python
encrypt_at_rest: ElasticsearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#id ElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.logPublishingOptions"></a>

```python
log_publishing_options: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_publishing_options ElasticsearchDomain#log_publishing_options}

---

##### `node_to_node_encryption`<sup>Optional</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.nodeToNodeEncryption"></a>

```python
node_to_node_encryption: ElasticsearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.snapshotOptions"></a>

```python
snapshot_options: ElasticsearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#snapshot_options ElasticsearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags ElasticsearchDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tags_all ElasticsearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.timeouts"></a>

```python
timeouts: ElasticsearchDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#timeouts ElasticsearchDomain#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainConfig.property.vpcOptions"></a>

```python
vpc_options: ElasticsearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#vpc_options ElasticsearchDomain#vpc_options}

---

### ElasticsearchDomainDomainEndpointOptions <a name="ElasticsearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions(
  custom_endpoint: str = None,
  custom_endpoint_certificate_arn: str = None,
  custom_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  enforce_https: typing.Union[bool, IResolvable] = None,
  tls_security_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}. |

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint ElasticsearchDomain#custom_endpoint}.

---

##### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}.

---

##### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}.

---

##### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enforce_https ElasticsearchDomain#enforce_https}.

---

##### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#tls_security_policy ElasticsearchDomain#tls_security_policy}.

---

### ElasticsearchDomainEbsOptions <a name="ElasticsearchDomainEbsOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainEbsOptions(
  ebs_enabled: typing.Union[bool, IResolvable],
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled">ebs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}. |

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.ebsEnabled"></a>

```python
ebs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#ebs_enabled ElasticsearchDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#iops ElasticsearchDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#throughput ElasticsearchDomain#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_size ElasticsearchDomain#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#volume_type ElasticsearchDomain#volume_type}.

---

### ElasticsearchDomainEncryptAtRest <a name="ElasticsearchDomainEncryptAtRest" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainEncryptAtRest(
  enabled: typing.Union[bool, IResolvable],
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#kms_key_id ElasticsearchDomain#kms_key_id}.

---

### ElasticsearchDomainLogPublishingOptions <a name="ElasticsearchDomainLogPublishingOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainLogPublishingOptions(
  cloudwatch_log_group_arn: str,
  log_type: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}.

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#log_type ElasticsearchDomain#log_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainNodeToNodeEncryption <a name="ElasticsearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

### ElasticsearchDomainSnapshotOptions <a name="ElasticsearchDomainSnapshotOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainSnapshotOptions(
  automated_snapshot_start_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}. |

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}.

---

### ElasticsearchDomainTimeouts <a name="ElasticsearchDomainTimeouts" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#create ElasticsearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#delete ElasticsearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#update ElasticsearchDomain#update}.

---

### ElasticsearchDomainVpcOptions <a name="ElasticsearchDomainVpcOptions" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainVpcOptions(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#security_group_ids ElasticsearchDomain#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#subnet_ids ElasticsearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">reset_master_user_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">reset_master_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_master_user_arn` <a name="reset_master_user_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```python
def reset_master_user_arn() -> None
```

##### `reset_master_user_name` <a name="reset_master_user_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```python
def reset_master_user_name() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">master_user_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_arn_input`<sup>Optional</sup> <a name="master_user_arn_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```python
master_user_arn_input: str
```

- *Type:* str

---

##### `master_user_name_input`<sup>Optional</sup> <a name="master_user_name_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```python
master_user_name_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_arn`<sup>Required</sup> <a name="master_user_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### ElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="ElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">put_master_user_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">reset_internal_user_database_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">reset_master_user_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_master_user_options` <a name="put_master_user_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```python
def put_master_user_options(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
) -> None
```

###### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_arn ElasticsearchDomain#master_user_arn}.

---

###### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_name ElasticsearchDomain#master_user_name}.

---

###### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#master_user_password ElasticsearchDomain#master_user_password}.

---

##### `reset_internal_user_database_enabled` <a name="reset_internal_user_database_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```python
def reset_internal_user_database_enabled() -> None
```

##### `reset_master_user_options` <a name="reset_master_user_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```python
def reset_master_user_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internal_user_database_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">master_user_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_options`<sup>Required</sup> <a name="master_user_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```python
master_user_options: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_user_database_enabled_input`<sup>Optional</sup> <a name="internal_user_database_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```python
internal_user_database_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_user_options_input`<sup>Optional</sup> <a name="master_user_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```python
master_user_options_input: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions">ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_user_database_enabled`<sup>Required</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAdvancedSecurityOptions">ElasticsearchDomainAdvancedSecurityOptions</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---


### ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">put_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```python
def put_duration(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#unit ElasticsearchDomain#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#value ElasticsearchDomain#value}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">cron_expression_for_recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">start_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cron_expression_for_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">start_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```python
duration: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `cron_expression_for_recurrence_input`<sup>Optional</sup> <a name="cron_expression_for_recurrence_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```python
cron_expression_for_recurrence_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```python
duration_input: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `start_at_input`<sup>Optional</sup> <a name="start_at_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```python
start_at_input: str
```

- *Type:* str

---

##### `cron_expression_for_recurrence`<sup>Required</sup> <a name="cron_expression_for_recurrence" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```python
cron_expression_for_recurrence: str
```

- *Type:* str

---

##### `start_at`<sup>Required</sup> <a name="start_at" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```python
start_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>, cdktf.IResolvable]

---


### ElasticsearchDomainAutoTuneOptionsOutputReference <a name="ElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">put_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">reset_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">reset_rollback_on_disable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_schedule` <a name="put_maintenance_schedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```python
def put_maintenance_schedule(
  value: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---

##### `reset_maintenance_schedule` <a name="reset_maintenance_schedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```python
def reset_maintenance_schedule() -> None
```

##### `reset_rollback_on_disable` <a name="reset_rollback_on_disable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```python
def reset_rollback_on_disable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">maintenance_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">rollback_on_disable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollback_on_disable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```python
maintenance_schedule: ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">ElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `maintenance_schedule_input`<sup>Optional</sup> <a name="maintenance_schedule_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```python
maintenance_schedule_input: typing.Union[IResolvable, typing.List[ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">ElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---

##### `rollback_on_disable_input`<sup>Optional</sup> <a name="rollback_on_disable_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```python
rollback_on_disable_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `rollback_on_disable`<sup>Required</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```python
rollback_on_disable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainAutoTuneOptions">ElasticsearchDomainAutoTuneOptions</a>

---


### ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference <a name="ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---


### ElasticsearchDomainClusterConfigOutputReference <a name="ElasticsearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions">put_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">put_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions">reset_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">reset_dedicated_master_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">reset_dedicated_master_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType">reset_dedicated_master_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount">reset_warm_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled">reset_warm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType">reset_warm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">reset_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">reset_zone_awareness_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cold_storage_options` <a name="put_cold_storage_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```python
def put_cold_storage_options(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#enabled ElasticsearchDomain#enabled}.

---

##### `put_zone_awareness_config` <a name="put_zone_awareness_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```python
def put_zone_awareness_config(
  availability_zone_count: typing.Union[int, float] = None
) -> None
```

###### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.availabilityZoneCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain#availability_zone_count ElasticsearchDomain#availability_zone_count}.

---

##### `reset_cold_storage_options` <a name="reset_cold_storage_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```python
def reset_cold_storage_options() -> None
```

##### `reset_dedicated_master_count` <a name="reset_dedicated_master_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```python
def reset_dedicated_master_count() -> None
```

##### `reset_dedicated_master_enabled` <a name="reset_dedicated_master_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```python
def reset_dedicated_master_enabled() -> None
```

##### `reset_dedicated_master_type` <a name="reset_dedicated_master_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```python
def reset_dedicated_master_type() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_warm_count` <a name="reset_warm_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```python
def reset_warm_count() -> None
```

##### `reset_warm_enabled` <a name="reset_warm_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```python
def reset_warm_enabled() -> None
```

##### `reset_warm_type` <a name="reset_warm_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetWarmType"></a>

```python
def reset_warm_type() -> None
```

##### `reset_zone_awareness_config` <a name="reset_zone_awareness_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```python
def reset_zone_awareness_config() -> None
```

##### `reset_zone_awareness_enabled` <a name="reset_zone_awareness_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```python
def reset_zone_awareness_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">cold_storage_options_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicated_master_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicated_master_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicated_master_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput">warm_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput">warm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput">warm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zone_awareness_config_input</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zone_awareness_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">warm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType">warm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cold_storage_options`<sup>Required</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```python
cold_storage_options: ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference">ElasticsearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `zone_awareness_config`<sup>Required</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference">ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `cold_storage_options_input`<sup>Optional</sup> <a name="cold_storage_options_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```python
cold_storage_options_input: ElasticsearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigColdStorageOptions">ElasticsearchDomainClusterConfigColdStorageOptions</a>

---

##### `dedicated_master_count_input`<sup>Optional</sup> <a name="dedicated_master_count_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```python
dedicated_master_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled_input`<sup>Optional</sup> <a name="dedicated_master_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```python
dedicated_master_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_type_input`<sup>Optional</sup> <a name="dedicated_master_type_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```python
dedicated_master_type_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `warm_count_input`<sup>Optional</sup> <a name="warm_count_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```python
warm_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled_input`<sup>Optional</sup> <a name="warm_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```python
warm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warm_type_input`<sup>Optional</sup> <a name="warm_type_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```python
warm_type_input: str
```

- *Type:* str

---

##### `zone_awareness_config_input`<sup>Optional</sup> <a name="zone_awareness_config_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```python
zone_awareness_config_input: ElasticsearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zone_awareness_enabled_input`<sup>Optional</sup> <a name="zone_awareness_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```python
zone_awareness_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_count`<sup>Required</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled`<sup>Required</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_type`<sup>Required</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `warm_count`<sup>Required</sup> <a name="warm_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled`<sup>Required</sup> <a name="warm_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```python
warm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warm_type`<sup>Required</sup> <a name="warm_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

---

##### `zone_awareness_enabled`<sup>Required</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfig">ElasticsearchDomainClusterConfig</a>

---


### ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">reset_availability_zone_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_count` <a name="reset_availability_zone_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```python
def reset_availability_zone_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availability_zone_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_count_input`<sup>Optional</sup> <a name="availability_zone_count_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```python
availability_zone_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_count`<sup>Required</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainClusterConfigZoneAwarenessConfig">ElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### ElasticsearchDomainCognitoOptionsOutputReference <a name="ElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainCognitoOptions">ElasticsearchDomainCognitoOptions</a>

---


### ElasticsearchDomainDomainEndpointOptionsOutputReference <a name="ElasticsearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">reset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">reset_custom_endpoint_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">reset_custom_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">reset_enforce_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">reset_tls_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_endpoint` <a name="reset_custom_endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```python
def reset_custom_endpoint() -> None
```

##### `reset_custom_endpoint_certificate_arn` <a name="reset_custom_endpoint_certificate_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```python
def reset_custom_endpoint_certificate_arn() -> None
```

##### `reset_custom_endpoint_enabled` <a name="reset_custom_endpoint_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```python
def reset_custom_endpoint_enabled() -> None
```

##### `reset_enforce_https` <a name="reset_enforce_https" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```python
def reset_enforce_https() -> None
```

##### `reset_tls_security_policy` <a name="reset_tls_security_policy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```python
def reset_tls_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">custom_endpoint_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">custom_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforce_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tls_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn_input`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```python
custom_endpoint_certificate_arn_input: str
```

- *Type:* str

---

##### `custom_endpoint_enabled_input`<sup>Optional</sup> <a name="custom_endpoint_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```python
custom_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_endpoint_input`<sup>Optional</sup> <a name="custom_endpoint_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```python
custom_endpoint_input: str
```

- *Type:* str

---

##### `enforce_https_input`<sup>Optional</sup> <a name="enforce_https_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```python
enforce_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy_input`<sup>Optional</sup> <a name="tls_security_policy_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```python
tls_security_policy_input: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn`<sup>Required</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

---

##### `custom_endpoint_enabled`<sup>Required</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_https`<sup>Required</sup> <a name="enforce_https" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy`<sup>Required</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainDomainEndpointOptions">ElasticsearchDomainDomainEndpointOptions</a>

---


### ElasticsearchDomainEbsOptionsOutputReference <a name="ElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_enabled_input`<sup>Optional</sup> <a name="ebs_enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```python
ebs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```python
ebs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEbsOptions">ElasticsearchDomainEbsOptions</a>

---


### ElasticsearchDomainEncryptAtRestOutputReference <a name="ElasticsearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainEncryptAtRest">ElasticsearchDomainEncryptAtRest</a>

---


### ElasticsearchDomainLogPublishingOptionsList <a name="ElasticsearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ElasticsearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ElasticsearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>]]

---


### ElasticsearchDomainLogPublishingOptionsOutputReference <a name="ElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticsearchDomainLogPublishingOptions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainLogPublishingOptions">ElasticsearchDomainLogPublishingOptions</a>, cdktf.IResolvable]

---


### ElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="ElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainNodeToNodeEncryption">ElasticsearchDomainNodeToNodeEncryption</a>

---


### ElasticsearchDomainSnapshotOptionsOutputReference <a name="ElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automated_snapshot_start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_snapshot_start_hour_input`<sup>Optional</sup> <a name="automated_snapshot_start_hour_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```python
automated_snapshot_start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainSnapshotOptions">ElasticsearchDomainSnapshotOptions</a>

---


### ElasticsearchDomainTimeoutsOutputReference <a name="ElasticsearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ElasticsearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainTimeouts">ElasticsearchDomainTimeouts</a>, cdktf.IResolvable]

---


### ElasticsearchDomainVpcOptionsOutputReference <a name="ElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import elasticsearch_domain

elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ElasticsearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.elasticsearchDomain.ElasticsearchDomainVpcOptions">ElasticsearchDomainVpcOptions</a>

---



