# `opensearchDomain` Submodule <a name="`opensearchDomain` Submodule" id="@cdktf/provider-aws.opensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchDomain <a name="OpensearchDomain" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomain(
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
  advanced_security_options: OpensearchDomainAdvancedSecurityOptions = None,
  auto_tune_options: OpensearchDomainAutoTuneOptions = None,
  cluster_config: OpensearchDomainClusterConfig = None,
  cognito_options: OpensearchDomainCognitoOptions = None,
  domain_endpoint_options: OpensearchDomainDomainEndpointOptions = None,
  ebs_options: OpensearchDomainEbsOptions = None,
  encrypt_at_rest: OpensearchDomainEncryptAtRest = None,
  engine_version: str = None,
  id: str = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]] = None,
  node_to_node_encryption: OpensearchDomainNodeToNodeEncryption = None,
  snapshot_options: OpensearchDomainSnapshotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OpensearchDomainTimeouts = None,
  vpc_options: OpensearchDomainVpcOptions = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.accessPolicies"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedOptions"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.advancedSecurityOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `auto_tune_options`<sup>Optional</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.autoTuneOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.clusterConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.cognitoOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.domainEndpointOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.ebsOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `encrypt_at_rest`<sup>Optional</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.encryptAtRest"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.engineVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.logPublishingOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `node_to_node_encryption`<sup>Optional</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.nodeToNodeEncryption"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.snapshotOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.Initializer.parameter.vpcOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions">put_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions">put_auto_tune_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig">put_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions">put_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions">put_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions">put_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest">put_encrypt_at_rest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions">put_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption">put_node_to_node_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions">put_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions">put_vpc_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies">reset_access_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions">reset_advanced_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions">reset_advanced_security_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions">reset_auto_tune_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig">reset_cluster_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions">reset_cognito_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions">reset_domain_endpoint_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions">reset_ebs_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest">reset_encrypt_at_rest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion">reset_engine_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions">reset_log_publishing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption">reset_node_to_node_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions">reset_snapshot_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions">reset_vpc_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_advanced_security_options` <a name="put_advanced_security_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions"></a>

```python
def put_advanced_security_options(
  enabled: typing.Union[bool, IResolvable],
  anonymous_auth_enabled: typing.Union[bool, IResolvable] = None,
  internal_user_database_enabled: typing.Union[bool, IResolvable] = None,
  master_user_options: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

###### `anonymous_auth_enabled`<sup>Optional</sup> <a name="anonymous_auth_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.anonymousAuthEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}.

---

###### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.internalUserDatabaseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}.

---

###### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAdvancedSecurityOptions.parameter.masterUserOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_options OpensearchDomain#master_user_options}

---

##### `put_auto_tune_options` <a name="put_auto_tune_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions"></a>

```python
def put_auto_tune_options(
  desired_state: str,
  maintenance_schedule: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]] = None,
  rollback_on_disable: str = None
) -> None
```

###### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}.

---

###### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.maintenanceSchedule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}

---

###### `rollback_on_disable`<sup>Optional</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putAutoTuneOptions.parameter.rollbackOnDisable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}.

---

##### `put_cluster_config` <a name="put_cluster_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig"></a>

```python
def put_cluster_config(
  cold_storage_options: OpensearchDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: typing.Union[bool, IResolvable] = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: typing.Union[bool, IResolvable] = None,
  warm_type: str = None,
  zone_awareness_config: OpensearchDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.coldStorageOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}

---

###### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.dedicatedMasterCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}.

---

###### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.dedicatedMasterEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}.

---

###### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.dedicatedMasterType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}.

---

###### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.instanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}.

---

###### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}.

---

###### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.warmCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}.

---

###### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.warmEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}.

---

###### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.warmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}.

---

###### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.zoneAwarenessConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}

---

###### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putClusterConfig.parameter.zoneAwarenessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}.

---

##### `put_cognito_options` <a name="put_cognito_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions"></a>

```python
def put_cognito_options(
  identity_pool_id: str,
  role_arn: str,
  user_pool_id: str,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.identityPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}.

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}.

---

###### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.userPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putCognitoOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `put_domain_endpoint_options` <a name="put_domain_endpoint_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions"></a>

```python
def put_domain_endpoint_options(
  custom_endpoint: str = None,
  custom_endpoint_certificate_arn: str = None,
  custom_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  enforce_https: typing.Union[bool, IResolvable] = None,
  tls_security_policy: str = None
) -> None
```

###### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.customEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}.

---

###### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.customEndpointCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}.

---

###### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.customEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}.

---

###### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.enforceHttps"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}.

---

###### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putDomainEndpointOptions.parameter.tlsSecurityPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}.

---

##### `put_ebs_options` <a name="put_ebs_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions"></a>

```python
def put_ebs_options(
  ebs_enabled: typing.Union[bool, IResolvable],
  iops: typing.Union[int, float] = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.ebsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEbsOptions.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}.

---

##### `put_encrypt_at_rest` <a name="put_encrypt_at_rest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest"></a>

```python
def put_encrypt_at_rest(
  enabled: typing.Union[bool, IResolvable],
  kms_key_id: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putEncryptAtRest.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}.

---

##### `put_log_publishing_options` <a name="put_log_publishing_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions"></a>

```python
def put_log_publishing_options(
  value: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putLogPublishingOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]

---

##### `put_node_to_node_encryption` <a name="put_node_to_node_encryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption"></a>

```python
def put_node_to_node_encryption(
  enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putNodeToNodeEncryption.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `put_snapshot_options` <a name="put_snapshot_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions"></a>

```python
def put_snapshot_options(
  automated_snapshot_start_hour: typing.Union[int, float]
) -> None
```

###### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putSnapshotOptions.parameter.automatedSnapshotStartHour"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}.

---

##### `put_vpc_options` <a name="put_vpc_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions"></a>

```python
def put_vpc_options(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.putVpcOptions.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}.

---

##### `reset_access_policies` <a name="reset_access_policies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAccessPolicies"></a>

```python
def reset_access_policies() -> None
```

##### `reset_advanced_options` <a name="reset_advanced_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedOptions"></a>

```python
def reset_advanced_options() -> None
```

##### `reset_advanced_security_options` <a name="reset_advanced_security_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAdvancedSecurityOptions"></a>

```python
def reset_advanced_security_options() -> None
```

##### `reset_auto_tune_options` <a name="reset_auto_tune_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetAutoTuneOptions"></a>

```python
def reset_auto_tune_options() -> None
```

##### `reset_cluster_config` <a name="reset_cluster_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetClusterConfig"></a>

```python
def reset_cluster_config() -> None
```

##### `reset_cognito_options` <a name="reset_cognito_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetCognitoOptions"></a>

```python
def reset_cognito_options() -> None
```

##### `reset_domain_endpoint_options` <a name="reset_domain_endpoint_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetDomainEndpointOptions"></a>

```python
def reset_domain_endpoint_options() -> None
```

##### `reset_ebs_options` <a name="reset_ebs_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEbsOptions"></a>

```python
def reset_ebs_options() -> None
```

##### `reset_encrypt_at_rest` <a name="reset_encrypt_at_rest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEncryptAtRest"></a>

```python
def reset_encrypt_at_rest() -> None
```

##### `reset_engine_version` <a name="reset_engine_version" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetEngineVersion"></a>

```python
def reset_engine_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_publishing_options` <a name="reset_log_publishing_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetLogPublishingOptions"></a>

```python
def reset_log_publishing_options() -> None
```

##### `reset_node_to_node_encryption` <a name="reset_node_to_node_encryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetNodeToNodeEncryption"></a>

```python
def reset_node_to_node_encryption() -> None
```

##### `reset_snapshot_options` <a name="reset_snapshot_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetSnapshotOptions"></a>

```python
def reset_snapshot_options() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpc_options` <a name="reset_vpc_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.resetVpcOptions"></a>

```python
def reset_vpc_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint">kibana_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions">log_publishing_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput">access_policies_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput">advanced_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput">advanced_security_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput">auto_tune_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput">cluster_config_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput">cognito_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput">domain_endpoint_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput">ebs_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput">encrypt_at_rest_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput">engine_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput">log_publishing_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput">node_to_node_encryption_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput">snapshot_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput">vpc_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies">access_policies</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `advanced_security_options`<sup>Required</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptions"></a>

```python
advanced_security_options: OpensearchDomainAdvancedSecurityOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `auto_tune_options`<sup>Required</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptions"></a>

```python
auto_tune_options: OpensearchDomainAutoTuneOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference">OpensearchDomainAutoTuneOptionsOutputReference</a>

---

##### `cluster_config`<sup>Required</sup> <a name="cluster_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfig"></a>

```python
cluster_config: OpensearchDomainClusterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference">OpensearchDomainClusterConfigOutputReference</a>

---

##### `cognito_options`<sup>Required</sup> <a name="cognito_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptions"></a>

```python
cognito_options: OpensearchDomainCognitoOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference">OpensearchDomainCognitoOptionsOutputReference</a>

---

##### `domain_endpoint_options`<sup>Required</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: OpensearchDomainDomainEndpointOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference">OpensearchDomainDomainEndpointOptionsOutputReference</a>

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `ebs_options`<sup>Required</sup> <a name="ebs_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptions"></a>

```python
ebs_options: OpensearchDomainEbsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference">OpensearchDomainEbsOptionsOutputReference</a>

---

##### `encrypt_at_rest`<sup>Required</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRest"></a>

```python
encrypt_at_rest: OpensearchDomainEncryptAtRestOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference">OpensearchDomainEncryptAtRestOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `kibana_endpoint`<sup>Required</sup> <a name="kibana_endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.kibanaEndpoint"></a>

```python
kibana_endpoint: str
```

- *Type:* str

---

##### `log_publishing_options`<sup>Required</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptions"></a>

```python
log_publishing_options: OpensearchDomainLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList">OpensearchDomainLogPublishingOptionsList</a>

---

##### `node_to_node_encryption`<sup>Required</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryption"></a>

```python
node_to_node_encryption: OpensearchDomainNodeToNodeEncryptionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference">OpensearchDomainNodeToNodeEncryptionOutputReference</a>

---

##### `snapshot_options`<sup>Required</sup> <a name="snapshot_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptions"></a>

```python
snapshot_options: OpensearchDomainSnapshotOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference">OpensearchDomainSnapshotOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeouts"></a>

```python
timeouts: OpensearchDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference">OpensearchDomainTimeoutsOutputReference</a>

---

##### `vpc_options`<sup>Required</sup> <a name="vpc_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptions"></a>

```python
vpc_options: OpensearchDomainVpcOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference">OpensearchDomainVpcOptionsOutputReference</a>

---

##### `access_policies_input`<sup>Optional</sup> <a name="access_policies_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPoliciesInput"></a>

```python
access_policies_input: str
```

- *Type:* str

---

##### `advanced_options_input`<sup>Optional</sup> <a name="advanced_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptionsInput"></a>

```python
advanced_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `advanced_security_options_input`<sup>Optional</sup> <a name="advanced_security_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedSecurityOptionsInput"></a>

```python
advanced_security_options_input: OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---

##### `auto_tune_options_input`<sup>Optional</sup> <a name="auto_tune_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.autoTuneOptionsInput"></a>

```python
auto_tune_options_input: OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---

##### `cluster_config_input`<sup>Optional</sup> <a name="cluster_config_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.clusterConfigInput"></a>

```python
cluster_config_input: OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---

##### `cognito_options_input`<sup>Optional</sup> <a name="cognito_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.cognitoOptionsInput"></a>

```python
cognito_options_input: OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---

##### `domain_endpoint_options_input`<sup>Optional</sup> <a name="domain_endpoint_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainEndpointOptionsInput"></a>

```python
domain_endpoint_options_input: OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `ebs_options_input`<sup>Optional</sup> <a name="ebs_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.ebsOptionsInput"></a>

```python
ebs_options_input: OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---

##### `encrypt_at_rest_input`<sup>Optional</sup> <a name="encrypt_at_rest_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.encryptAtRestInput"></a>

```python
encrypt_at_rest_input: OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---

##### `engine_version_input`<sup>Optional</sup> <a name="engine_version_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersionInput"></a>

```python
engine_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_publishing_options_input`<sup>Optional</sup> <a name="log_publishing_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.logPublishingOptionsInput"></a>

```python
log_publishing_options_input: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]

---

##### `node_to_node_encryption_input`<sup>Optional</sup> <a name="node_to_node_encryption_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.nodeToNodeEncryptionInput"></a>

```python
node_to_node_encryption_input: OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---

##### `snapshot_options_input`<sup>Optional</sup> <a name="snapshot_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.snapshotOptionsInput"></a>

```python
snapshot_options_input: OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[OpensearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>, cdktf.IResolvable]

---

##### `vpc_options_input`<sup>Optional</sup> <a name="vpc_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.vpcOptionsInput"></a>

```python
vpc_options_input: OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---

##### `access_policies`<sup>Required</sup> <a name="access_policies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

---

##### `advanced_options`<sup>Required</sup> <a name="advanced_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchDomainAdvancedSecurityOptions <a name="OpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAdvancedSecurityOptions(
  enabled: typing.Union[bool, IResolvable],
  anonymous_auth_enabled: typing.Union[bool, IResolvable] = None,
  internal_user_database_enabled: typing.Union[bool, IResolvable] = None,
  master_user_options: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled">anonymous_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | master_user_options block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `anonymous_auth_enabled`<sup>Optional</sup> <a name="anonymous_auth_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.anonymousAuthEnabled"></a>

```python
anonymous_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#anonymous_auth_enabled OpensearchDomain#anonymous_auth_enabled}.

---

##### `internal_user_database_enabled`<sup>Optional</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#internal_user_database_enabled OpensearchDomain#internal_user_database_enabled}.

---

##### `master_user_options`<sup>Optional</sup> <a name="master_user_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions.property.masterUserOptions"></a>

```python
master_user_options: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

master_user_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_options OpensearchDomain#master_user_options}

---

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptions <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName">master_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}. |

---

##### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}.

---

##### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}.

---

##### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}.

---

### OpensearchDomainAutoTuneOptions <a name="OpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptions(
  desired_state: str,
  maintenance_schedule: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]] = None,
  rollback_on_disable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule">maintenance_schedule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | maintenance_schedule block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable">rollback_on_disable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}. |

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#desired_state OpensearchDomain#desired_state}.

---

##### `maintenance_schedule`<sup>Optional</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.maintenanceSchedule"></a>

```python
maintenance_schedule: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

maintenance_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#maintenance_schedule OpensearchDomain#maintenance_schedule}

---

##### `rollback_on_disable`<sup>Optional</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions.property.rollbackOnDisable"></a>

```python
rollback_on_disable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#rollback_on_disable OpensearchDomain#rollback_on_disable}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="OpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule(
  cron_expression_for_recurrence: str,
  duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration,
  start_at: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence">cron_expression_for_recurrence</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | duration block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt">start_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}. |

---

##### `cron_expression_for_recurrence`<sup>Required</sup> <a name="cron_expression_for_recurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.cronExpressionForRecurrence"></a>

```python
cron_expression_for_recurrence: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cron_expression_for_recurrence OpensearchDomain#cron_expression_for_recurrence}.

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.duration"></a>

```python
duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

duration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#duration OpensearchDomain#duration}

---

##### `start_at`<sup>Required</sup> <a name="start_at" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule.property.startAt"></a>

```python
start_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#start_at OpensearchDomain#start_at}.

---

### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration(
  unit: str,
  value: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit">unit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value">value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.unit"></a>

```python
unit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}.

---

### OpensearchDomainClusterConfig <a name="OpensearchDomainClusterConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfig(
  cold_storage_options: OpensearchDomainClusterConfigColdStorageOptions = None,
  dedicated_master_count: typing.Union[int, float] = None,
  dedicated_master_enabled: typing.Union[bool, IResolvable] = None,
  dedicated_master_type: str = None,
  instance_count: typing.Union[int, float] = None,
  instance_type: str = None,
  warm_count: typing.Union[int, float] = None,
  warm_enabled: typing.Union[bool, IResolvable] = None,
  warm_type: str = None,
  zone_awareness_config: OpensearchDomainClusterConfigZoneAwarenessConfig = None,
  zone_awareness_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | cold_storage_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled">warm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType">warm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | zone_awareness_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}. |

---

##### `cold_storage_options`<sup>Optional</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.coldStorageOptions"></a>

```python
cold_storage_options: OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

cold_storage_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cold_storage_options OpensearchDomain#cold_storage_options}

---

##### `dedicated_master_count`<sup>Optional</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_count OpensearchDomain#dedicated_master_count}.

---

##### `dedicated_master_enabled`<sup>Optional</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_enabled OpensearchDomain#dedicated_master_enabled}.

---

##### `dedicated_master_type`<sup>Optional</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#dedicated_master_type OpensearchDomain#dedicated_master_type}.

---

##### `instance_count`<sup>Optional</sup> <a name="instance_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_count OpensearchDomain#instance_count}.

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#instance_type OpensearchDomain#instance_type}.

---

##### `warm_count`<sup>Optional</sup> <a name="warm_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_count OpensearchDomain#warm_count}.

---

##### `warm_enabled`<sup>Optional</sup> <a name="warm_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmEnabled"></a>

```python
warm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_enabled OpensearchDomain#warm_enabled}.

---

##### `warm_type`<sup>Optional</sup> <a name="warm_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#warm_type OpensearchDomain#warm_type}.

---

##### `zone_awareness_config`<sup>Optional</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

zone_awareness_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_config OpensearchDomain#zone_awareness_config}

---

##### `zone_awareness_enabled`<sup>Optional</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#zone_awareness_enabled OpensearchDomain#zone_awareness_enabled}.

---

### OpensearchDomainClusterConfigColdStorageOptions <a name="OpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions(
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainClusterConfigZoneAwarenessConfig <a name="OpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig(
  availability_zone_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}. |

---

##### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}.

---

### OpensearchDomainCognitoOptions <a name="OpensearchDomainCognitoOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainCognitoOptions(
  identity_pool_id: str,
  role_arn: str,
  user_pool_id: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId">user_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#identity_pool_id OpensearchDomain#identity_pool_id}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#role_arn OpensearchDomain#role_arn}.

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#user_pool_id OpensearchDomain#user_pool_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainConfig <a name="OpensearchDomainConfig" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainConfig(
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
  advanced_security_options: OpensearchDomainAdvancedSecurityOptions = None,
  auto_tune_options: OpensearchDomainAutoTuneOptions = None,
  cluster_config: OpensearchDomainClusterConfig = None,
  cognito_options: OpensearchDomainCognitoOptions = None,
  domain_endpoint_options: OpensearchDomainDomainEndpointOptions = None,
  ebs_options: OpensearchDomainEbsOptions = None,
  encrypt_at_rest: OpensearchDomainEncryptAtRest = None,
  engine_version: str = None,
  id: str = None,
  log_publishing_options: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]] = None,
  node_to_node_encryption: OpensearchDomainNodeToNodeEncryption = None,
  snapshot_options: OpensearchDomainSnapshotOptions = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: OpensearchDomainTimeouts = None,
  vpc_options: OpensearchDomainVpcOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies">access_policies</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions">advanced_options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions">advanced_security_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | advanced_security_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions">auto_tune_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | auto_tune_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig">cluster_config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | cluster_config block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions">cognito_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | cognito_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions">domain_endpoint_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | domain_endpoint_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions">ebs_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | ebs_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest">encrypt_at_rest</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | encrypt_at_rest block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion">engine_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions">log_publishing_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]</code> | log_publishing_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption">node_to_node_encryption</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | node_to_node_encryption block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions">snapshot_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | snapshot_options block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions">vpc_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | vpc_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_name OpensearchDomain#domain_name}.

---

##### `access_policies`<sup>Optional</sup> <a name="access_policies" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.accessPolicies"></a>

```python
access_policies: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#access_policies OpensearchDomain#access_policies}.

---

##### `advanced_options`<sup>Optional</sup> <a name="advanced_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedOptions"></a>

```python
advanced_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_options OpensearchDomain#advanced_options}.

---

##### `advanced_security_options`<sup>Optional</sup> <a name="advanced_security_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.advancedSecurityOptions"></a>

```python
advanced_security_options: OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

advanced_security_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#advanced_security_options OpensearchDomain#advanced_security_options}

---

##### `auto_tune_options`<sup>Optional</sup> <a name="auto_tune_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.autoTuneOptions"></a>

```python
auto_tune_options: OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

auto_tune_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#auto_tune_options OpensearchDomain#auto_tune_options}

---

##### `cluster_config`<sup>Optional</sup> <a name="cluster_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.clusterConfig"></a>

```python
cluster_config: OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

cluster_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cluster_config OpensearchDomain#cluster_config}

---

##### `cognito_options`<sup>Optional</sup> <a name="cognito_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.cognitoOptions"></a>

```python
cognito_options: OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

cognito_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cognito_options OpensearchDomain#cognito_options}

---

##### `domain_endpoint_options`<sup>Optional</sup> <a name="domain_endpoint_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.domainEndpointOptions"></a>

```python
domain_endpoint_options: OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

domain_endpoint_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#domain_endpoint_options OpensearchDomain#domain_endpoint_options}

---

##### `ebs_options`<sup>Optional</sup> <a name="ebs_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.ebsOptions"></a>

```python
ebs_options: OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

ebs_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_options OpensearchDomain#ebs_options}

---

##### `encrypt_at_rest`<sup>Optional</sup> <a name="encrypt_at_rest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.encryptAtRest"></a>

```python
encrypt_at_rest: OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

encrypt_at_rest block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#encrypt_at_rest OpensearchDomain#encrypt_at_rest}

---

##### `engine_version`<sup>Optional</sup> <a name="engine_version" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#engine_version OpensearchDomain#engine_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#id OpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_publishing_options`<sup>Optional</sup> <a name="log_publishing_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.logPublishingOptions"></a>

```python
log_publishing_options: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]

log_publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_publishing_options OpensearchDomain#log_publishing_options}

---

##### `node_to_node_encryption`<sup>Optional</sup> <a name="node_to_node_encryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.nodeToNodeEncryption"></a>

```python
node_to_node_encryption: OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

node_to_node_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#node_to_node_encryption OpensearchDomain#node_to_node_encryption}

---

##### `snapshot_options`<sup>Optional</sup> <a name="snapshot_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.snapshotOptions"></a>

```python
snapshot_options: OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

snapshot_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#snapshot_options OpensearchDomain#snapshot_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags OpensearchDomain#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tags_all OpensearchDomain#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.timeouts"></a>

```python
timeouts: OpensearchDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#timeouts OpensearchDomain#timeouts}

---

##### `vpc_options`<sup>Optional</sup> <a name="vpc_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainConfig.property.vpcOptions"></a>

```python
vpc_options: OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

vpc_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#vpc_options OpensearchDomain#vpc_options}

---

### OpensearchDomainDomainEndpointOptions <a name="OpensearchDomainDomainEndpointOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainDomainEndpointOptions(
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
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}. |

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint OpensearchDomain#custom_endpoint}.

---

##### `custom_endpoint_certificate_arn`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_certificate_arn OpensearchDomain#custom_endpoint_certificate_arn}.

---

##### `custom_endpoint_enabled`<sup>Optional</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#custom_endpoint_enabled OpensearchDomain#custom_endpoint_enabled}.

---

##### `enforce_https`<sup>Optional</sup> <a name="enforce_https" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enforce_https OpensearchDomain#enforce_https}.

---

##### `tls_security_policy`<sup>Optional</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#tls_security_policy OpensearchDomain#tls_security_policy}.

---

### OpensearchDomainEbsOptions <a name="OpensearchDomainEbsOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainEbsOptions(
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
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled">ebs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}. |

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.ebsEnabled"></a>

```python
ebs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#ebs_enabled OpensearchDomain#ebs_enabled}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#iops OpensearchDomain#iops}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#throughput OpensearchDomain#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_size OpensearchDomain#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#volume_type OpensearchDomain#volume_type}.

---

### OpensearchDomainEncryptAtRest <a name="OpensearchDomainEncryptAtRest" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainEncryptAtRest(
  enabled: typing.Union[bool, IResolvable],
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#kms_key_id OpensearchDomain#kms_key_id}.

---

### OpensearchDomainLogPublishingOptions <a name="OpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainLogPublishingOptions(
  cloudwatch_log_group_arn: str,
  log_type: str,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType">log_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#cloudwatch_log_group_arn OpensearchDomain#cloudwatch_log_group_arn}.

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#log_type OpensearchDomain#log_type}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainNodeToNodeEncryption <a name="OpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainNodeToNodeEncryption(
  enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

### OpensearchDomainSnapshotOptions <a name="OpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainSnapshotOptions(
  automated_snapshot_start_hour: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}. |

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#automated_snapshot_start_hour OpensearchDomain#automated_snapshot_start_hour}.

---

### OpensearchDomainTimeouts <a name="OpensearchDomainTimeouts" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#create OpensearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#delete OpensearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#update OpensearchDomain#update}.

---

### OpensearchDomainVpcOptions <a name="OpensearchDomainVpcOptions" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainVpcOptions(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#security_group_ids OpensearchDomain#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#subnet_ids OpensearchDomain#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn">reset_master_user_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName">reset_master_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword">reset_master_user_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_master_user_arn` <a name="reset_master_user_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserArn"></a>

```python
def reset_master_user_arn() -> None
```

##### `reset_master_user_name` <a name="reset_master_user_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserName"></a>

```python
def reset_master_user_name() -> None
```

##### `reset_master_user_password` <a name="reset_master_user_password" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.resetMasterUserPassword"></a>

```python
def reset_master_user_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput">master_user_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput">master_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput">master_user_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn">master_user_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName">master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword">master_user_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_arn_input`<sup>Optional</sup> <a name="master_user_arn_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArnInput"></a>

```python
master_user_arn_input: str
```

- *Type:* str

---

##### `master_user_name_input`<sup>Optional</sup> <a name="master_user_name_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserNameInput"></a>

```python
master_user_name_input: str
```

- *Type:* str

---

##### `master_user_password_input`<sup>Optional</sup> <a name="master_user_password_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPasswordInput"></a>

```python
master_user_password_input: str
```

- *Type:* str

---

##### `master_user_arn`<sup>Required</sup> <a name="master_user_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserArn"></a>

```python
master_user_arn: str
```

- *Type:* str

---

##### `master_user_name`<sup>Required</sup> <a name="master_user_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserName"></a>

```python
master_user_name: str
```

- *Type:* str

---

##### `master_user_password`<sup>Required</sup> <a name="master_user_password" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.masterUserPassword"></a>

```python
master_user_password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---


### OpensearchDomainAdvancedSecurityOptionsOutputReference <a name="OpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions">put_master_user_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled">reset_anonymous_auth_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled">reset_internal_user_database_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions">reset_master_user_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_master_user_options` <a name="put_master_user_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions"></a>

```python
def put_master_user_options(
  master_user_arn: str = None,
  master_user_name: str = None,
  master_user_password: str = None
) -> None
```

###### `master_user_arn`<sup>Optional</sup> <a name="master_user_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_arn OpensearchDomain#master_user_arn}.

---

###### `master_user_name`<sup>Optional</sup> <a name="master_user_name" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_name OpensearchDomain#master_user_name}.

---

###### `master_user_password`<sup>Optional</sup> <a name="master_user_password" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.putMasterUserOptions.parameter.masterUserPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#master_user_password OpensearchDomain#master_user_password}.

---

##### `reset_anonymous_auth_enabled` <a name="reset_anonymous_auth_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetAnonymousAuthEnabled"></a>

```python
def reset_anonymous_auth_enabled() -> None
```

##### `reset_internal_user_database_enabled` <a name="reset_internal_user_database_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetInternalUserDatabaseEnabled"></a>

```python
def reset_internal_user_database_enabled() -> None
```

##### `reset_master_user_options` <a name="reset_master_user_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.resetMasterUserOptions"></a>

```python
def reset_master_user_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions">master_user_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput">anonymous_auth_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput">internal_user_database_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput">master_user_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled">anonymous_auth_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internal_user_database_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `master_user_options`<sup>Required</sup> <a name="master_user_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptions"></a>

```python
master_user_options: OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference">OpensearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference</a>

---

##### `anonymous_auth_enabled_input`<sup>Optional</sup> <a name="anonymous_auth_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabledInput"></a>

```python
anonymous_auth_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_user_database_enabled_input`<sup>Optional</sup> <a name="internal_user_database_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabledInput"></a>

```python
internal_user_database_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `master_user_options_input`<sup>Optional</sup> <a name="master_user_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.masterUserOptionsInput"></a>

```python
master_user_options_input: OpensearchDomainAdvancedSecurityOptionsMasterUserOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsMasterUserOptions">OpensearchDomainAdvancedSecurityOptionsMasterUserOptions</a>

---

##### `anonymous_auth_enabled`<sup>Required</sup> <a name="anonymous_auth_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.anonymousAuthEnabled"></a>

```python
anonymous_auth_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_user_database_enabled`<sup>Required</sup> <a name="internal_user_database_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```python
internal_user_database_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAdvancedSecurityOptions">OpensearchDomainAdvancedSecurityOptions</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---


### OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration">put_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_duration` <a name="put_duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration"></a>

```python
def put_duration(
  unit: str,
  value: typing.Union[int, float]
) -> None
```

###### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.unit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#unit OpensearchDomain#unit}.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.putDuration.parameter.value"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#value OpensearchDomain#value}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput">cron_expression_for_recurrence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput">duration_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput">start_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cron_expression_for_recurrence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">start_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```python
duration: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference</a>

---

##### `cron_expression_for_recurrence_input`<sup>Optional</sup> <a name="cron_expression_for_recurrence_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrenceInput"></a>

```python
cron_expression_for_recurrence_input: str
```

- *Type:* str

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.durationInput"></a>

```python
duration_input: OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">OpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---

##### `start_at_input`<sup>Optional</sup> <a name="start_at_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAtInput"></a>

```python
start_at_input: str
```

- *Type:* str

---

##### `cron_expression_for_recurrence`<sup>Required</sup> <a name="cron_expression_for_recurrence" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```python
cron_expression_for_recurrence: str
```

- *Type:* str

---

##### `start_at`<sup>Required</sup> <a name="start_at" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```python
start_at: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpensearchDomainAutoTuneOptionsMaintenanceSchedule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>, cdktf.IResolvable]

---


### OpensearchDomainAutoTuneOptionsOutputReference <a name="OpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule">put_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule">reset_maintenance_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable">reset_rollback_on_disable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_maintenance_schedule` <a name="put_maintenance_schedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule"></a>

```python
def put_maintenance_schedule(
  value: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.putMaintenanceSchedule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---

##### `reset_maintenance_schedule` <a name="reset_maintenance_schedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetMaintenanceSchedule"></a>

```python
def reset_maintenance_schedule() -> None
```

##### `reset_rollback_on_disable` <a name="reset_rollback_on_disable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.resetRollbackOnDisable"></a>

```python
def reset_rollback_on_disable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenance_schedule</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput">maintenance_schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput">rollback_on_disable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollback_on_disable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `maintenance_schedule`<sup>Required</sup> <a name="maintenance_schedule" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```python
maintenance_schedule: OpensearchDomainAutoTuneOptionsMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceScheduleList">OpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `maintenance_schedule_input`<sup>Optional</sup> <a name="maintenance_schedule_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceScheduleInput"></a>

```python
maintenance_schedule_input: typing.Union[IResolvable, typing.List[OpensearchDomainAutoTuneOptionsMaintenanceSchedule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsMaintenanceSchedule">OpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>]]

---

##### `rollback_on_disable_input`<sup>Optional</sup> <a name="rollback_on_disable_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisableInput"></a>

```python
rollback_on_disable_input: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `rollback_on_disable`<sup>Required</sup> <a name="rollback_on_disable" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```python
rollback_on_disable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainAutoTuneOptions">OpensearchDomainAutoTuneOptions</a>

---


### OpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="OpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---


### OpensearchDomainClusterConfigOutputReference <a name="OpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions">put_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig">put_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions">reset_cold_storage_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount">reset_dedicated_master_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled">reset_dedicated_master_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType">reset_dedicated_master_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount">reset_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount">reset_warm_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled">reset_warm_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType">reset_warm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig">reset_zone_awareness_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled">reset_zone_awareness_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cold_storage_options` <a name="put_cold_storage_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions"></a>

```python
def put_cold_storage_options(
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putColdStorageOptions.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#enabled OpensearchDomain#enabled}.

---

##### `put_zone_awareness_config` <a name="put_zone_awareness_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig"></a>

```python
def put_zone_awareness_config(
  availability_zone_count: typing.Union[int, float] = None
) -> None
```

###### `availability_zone_count`<sup>Optional</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.putZoneAwarenessConfig.parameter.availabilityZoneCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opensearch_domain#availability_zone_count OpensearchDomain#availability_zone_count}.

---

##### `reset_cold_storage_options` <a name="reset_cold_storage_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetColdStorageOptions"></a>

```python
def reset_cold_storage_options() -> None
```

##### `reset_dedicated_master_count` <a name="reset_dedicated_master_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterCount"></a>

```python
def reset_dedicated_master_count() -> None
```

##### `reset_dedicated_master_enabled` <a name="reset_dedicated_master_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterEnabled"></a>

```python
def reset_dedicated_master_enabled() -> None
```

##### `reset_dedicated_master_type` <a name="reset_dedicated_master_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetDedicatedMasterType"></a>

```python
def reset_dedicated_master_type() -> None
```

##### `reset_instance_count` <a name="reset_instance_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceCount"></a>

```python
def reset_instance_count() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_warm_count` <a name="reset_warm_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmCount"></a>

```python
def reset_warm_count() -> None
```

##### `reset_warm_enabled` <a name="reset_warm_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmEnabled"></a>

```python
def reset_warm_enabled() -> None
```

##### `reset_warm_type` <a name="reset_warm_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetWarmType"></a>

```python
def reset_warm_type() -> None
```

##### `reset_zone_awareness_config` <a name="reset_zone_awareness_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessConfig"></a>

```python
def reset_zone_awareness_config() -> None
```

##### `reset_zone_awareness_enabled` <a name="reset_zone_awareness_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.resetZoneAwarenessEnabled"></a>

```python
def reset_zone_awareness_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">cold_storage_options</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zone_awareness_config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput">cold_storage_options_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput">dedicated_master_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput">dedicated_master_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput">dedicated_master_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput">instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput">warm_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput">warm_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput">warm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput">zone_awareness_config_input</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput">zone_awareness_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicated_master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicated_master_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicated_master_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount">warm_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled">warm_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType">warm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zone_awareness_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cold_storage_options`<sup>Required</sup> <a name="cold_storage_options" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```python
cold_storage_options: OpensearchDomainClusterConfigColdStorageOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptionsOutputReference">OpensearchDomainClusterConfigColdStorageOptionsOutputReference</a>

---

##### `zone_awareness_config`<sup>Required</sup> <a name="zone_awareness_config" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```python
zone_awareness_config: OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference">OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference</a>

---

##### `cold_storage_options_input`<sup>Optional</sup> <a name="cold_storage_options_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.coldStorageOptionsInput"></a>

```python
cold_storage_options_input: OpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigColdStorageOptions">OpensearchDomainClusterConfigColdStorageOptions</a>

---

##### `dedicated_master_count_input`<sup>Optional</sup> <a name="dedicated_master_count_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCountInput"></a>

```python
dedicated_master_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled_input`<sup>Optional</sup> <a name="dedicated_master_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabledInput"></a>

```python
dedicated_master_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_type_input`<sup>Optional</sup> <a name="dedicated_master_type_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterTypeInput"></a>

```python
dedicated_master_type_input: str
```

- *Type:* str

---

##### `instance_count_input`<sup>Optional</sup> <a name="instance_count_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCountInput"></a>

```python
instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `warm_count_input`<sup>Optional</sup> <a name="warm_count_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCountInput"></a>

```python
warm_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled_input`<sup>Optional</sup> <a name="warm_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabledInput"></a>

```python
warm_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warm_type_input`<sup>Optional</sup> <a name="warm_type_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmTypeInput"></a>

```python
warm_type_input: str
```

- *Type:* str

---

##### `zone_awareness_config_input`<sup>Optional</sup> <a name="zone_awareness_config_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfigInput"></a>

```python
zone_awareness_config_input: OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---

##### `zone_awareness_enabled_input`<sup>Optional</sup> <a name="zone_awareness_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabledInput"></a>

```python
zone_awareness_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_count`<sup>Required</sup> <a name="dedicated_master_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```python
dedicated_master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dedicated_master_enabled`<sup>Required</sup> <a name="dedicated_master_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```python
dedicated_master_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dedicated_master_type`<sup>Required</sup> <a name="dedicated_master_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```python
dedicated_master_type: str
```

- *Type:* str

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `warm_count`<sup>Required</sup> <a name="warm_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```python
warm_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `warm_enabled`<sup>Required</sup> <a name="warm_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```python
warm_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `warm_type`<sup>Required</sup> <a name="warm_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```python
warm_type: str
```

- *Type:* str

---

##### `zone_awareness_enabled`<sup>Required</sup> <a name="zone_awareness_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```python
zone_awareness_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfig">OpensearchDomainClusterConfig</a>

---


### OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount">reset_availability_zone_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone_count` <a name="reset_availability_zone_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resetAvailabilityZoneCount"></a>

```python
def reset_availability_zone_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput">availability_zone_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availability_zone_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_count_input`<sup>Optional</sup> <a name="availability_zone_count_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCountInput"></a>

```python
availability_zone_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_zone_count`<sup>Required</sup> <a name="availability_zone_count" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```python
availability_zone_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainClusterConfigZoneAwarenessConfig">OpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### OpensearchDomainCognitoOptionsOutputReference <a name="OpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainCognitoOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput">identity_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput">user_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">identity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId">user_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_pool_id_input`<sup>Optional</sup> <a name="identity_pool_id_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolIdInput"></a>

```python
identity_pool_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `user_pool_id_input`<sup>Optional</sup> <a name="user_pool_id_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolIdInput"></a>

```python
user_pool_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_pool_id`<sup>Required</sup> <a name="identity_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```python
identity_pool_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `user_pool_id`<sup>Required</sup> <a name="user_pool_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```python
user_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainCognitoOptions">OpensearchDomainCognitoOptions</a>

---


### OpensearchDomainDomainEndpointOptionsOutputReference <a name="OpensearchDomainDomainEndpointOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint">reset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn">reset_custom_endpoint_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled">reset_custom_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps">reset_enforce_https</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">reset_tls_security_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_endpoint` <a name="reset_custom_endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpoint"></a>

```python
def reset_custom_endpoint() -> None
```

##### `reset_custom_endpoint_certificate_arn` <a name="reset_custom_endpoint_certificate_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointCertificateArn"></a>

```python
def reset_custom_endpoint_certificate_arn() -> None
```

##### `reset_custom_endpoint_enabled` <a name="reset_custom_endpoint_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetCustomEndpointEnabled"></a>

```python
def reset_custom_endpoint_enabled() -> None
```

##### `reset_enforce_https` <a name="reset_enforce_https" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```python
def reset_enforce_https() -> None
```

##### `reset_tls_security_policy` <a name="reset_tls_security_policy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```python
def reset_tls_security_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput">custom_endpoint_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput">custom_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput">custom_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforce_https_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tls_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint">custom_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn">custom_endpoint_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled">custom_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps">enforce_https</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tls_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn_input`<sup>Optional</sup> <a name="custom_endpoint_certificate_arn_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArnInput"></a>

```python
custom_endpoint_certificate_arn_input: str
```

- *Type:* str

---

##### `custom_endpoint_enabled_input`<sup>Optional</sup> <a name="custom_endpoint_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabledInput"></a>

```python
custom_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_endpoint_input`<sup>Optional</sup> <a name="custom_endpoint_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointInput"></a>

```python
custom_endpoint_input: str
```

- *Type:* str

---

##### `enforce_https_input`<sup>Optional</sup> <a name="enforce_https_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```python
enforce_https_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy_input`<sup>Optional</sup> <a name="tls_security_policy_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```python
tls_security_policy_input: str
```

- *Type:* str

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpoint"></a>

```python
custom_endpoint: str
```

- *Type:* str

---

##### `custom_endpoint_certificate_arn`<sup>Required</sup> <a name="custom_endpoint_certificate_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointCertificateArn"></a>

```python
custom_endpoint_certificate_arn: str
```

- *Type:* str

---

##### `custom_endpoint_enabled`<sup>Required</sup> <a name="custom_endpoint_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.customEndpointEnabled"></a>

```python
custom_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_https`<sup>Required</sup> <a name="enforce_https" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```python
enforce_https: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tls_security_policy`<sup>Required</sup> <a name="tls_security_policy" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```python
tls_security_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainDomainEndpointOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainDomainEndpointOptions">OpensearchDomainDomainEndpointOptions</a>

---


### OpensearchDomainEbsOptionsOutputReference <a name="OpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainEbsOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput">ebs_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebs_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs_enabled_input`<sup>Optional</sup> <a name="ebs_enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabledInput"></a>

```python
ebs_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `ebs_enabled`<sup>Required</sup> <a name="ebs_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```python
ebs_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEbsOptions">OpensearchDomainEbsOptions</a>

---


### OpensearchDomainEncryptAtRestOutputReference <a name="OpensearchDomainEncryptAtRestOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainEncryptAtRestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRestOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainEncryptAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainEncryptAtRest">OpensearchDomainEncryptAtRest</a>

---


### OpensearchDomainLogPublishingOptionsList <a name="OpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainLogPublishingOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OpensearchDomainLogPublishingOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>]]

---


### OpensearchDomainLogPublishingOptionsOutputReference <a name="OpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput">cloudwatch_log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatch_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn_input`<sup>Optional</sup> <a name="cloudwatch_log_group_arn_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArnInput"></a>

```python
cloudwatch_log_group_arn_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `cloudwatch_log_group_arn`<sup>Required</sup> <a name="cloudwatch_log_group_arn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```python
cloudwatch_log_group_arn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpensearchDomainLogPublishingOptions, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainLogPublishingOptions">OpensearchDomainLogPublishingOptions</a>, cdktf.IResolvable]

---


### OpensearchDomainNodeToNodeEncryptionOutputReference <a name="OpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainNodeToNodeEncryption">OpensearchDomainNodeToNodeEncryption</a>

---


### OpensearchDomainSnapshotOptionsOutputReference <a name="OpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput">automated_snapshot_start_hour_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automated_snapshot_start_hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automated_snapshot_start_hour_input`<sup>Optional</sup> <a name="automated_snapshot_start_hour_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHourInput"></a>

```python
automated_snapshot_start_hour_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `automated_snapshot_start_hour`<sup>Required</sup> <a name="automated_snapshot_start_hour" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```python
automated_snapshot_start_hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainSnapshotOptions">OpensearchDomainSnapshotOptions</a>

---


### OpensearchDomainTimeoutsOutputReference <a name="OpensearchDomainTimeoutsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[OpensearchDomainTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainTimeouts">OpensearchDomainTimeouts</a>, cdktf.IResolvable]

---


### OpensearchDomainVpcOptionsOutputReference <a name="OpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import opensearch_domain

opensearchDomain.OpensearchDomainVpcOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchDomain.OpensearchDomainVpcOptions">OpensearchDomainVpcOptions</a>

---



