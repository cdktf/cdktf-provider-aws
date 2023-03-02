# `cloudfrontDistribution` Submodule <a name="`cloudfrontDistribution` Submodule" id="@cdktf/provider-aws.cloudfrontDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistribution <a name="CloudfrontDistribution" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution aws_cloudfront_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistribution(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_cache_behavior: CloudfrontDistributionDefaultCacheBehavior,
  enabled: typing.Union[bool, IResolvable],
  origin: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]],
  restrictions: CloudfrontDistributionRestrictions,
  viewer_certificate: CloudfrontDistributionViewerCertificate,
  aliases: typing.List[str] = None,
  comment: str = None,
  custom_error_response: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]] = None,
  default_root_object: str = None,
  http_version: str = None,
  id: str = None,
  is_ipv6_enabled: typing.Union[bool, IResolvable] = None,
  logging_config: CloudfrontDistributionLoggingConfig = None,
  ordered_cache_behavior: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]] = None,
  origin_group: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]] = None,
  price_class: str = None,
  retain_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  wait_for_deployment: typing.Union[bool, IResolvable] = None,
  web_acl_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.origin">origin</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]</code> | origin block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.viewerCertificate">viewer_certificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | viewer_certificate block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.customErrorResponse">custom_error_response</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]</code> | custom_error_response block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.defaultRootObject">default_root_object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.httpVersion">http_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.orderedCacheBehavior">ordered_cache_behavior</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]</code> | ordered_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.originGroup">origin_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]</code> | origin_group block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.priceClass">price_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.retainOnDelete">retain_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.waitForDeployment">wait_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.webAclId">web_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.defaultCacheBehavior"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.origin"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin CloudfrontDistribution#origin}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.restrictions"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}

---

##### `viewer_certificate`<sup>Required</sup> <a name="viewer_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.viewerCertificate"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

viewer_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.aliases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}.

---

##### `custom_error_response`<sup>Optional</sup> <a name="custom_error_response" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.customErrorResponse"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]

custom_error_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}

---

##### `default_root_object`<sup>Optional</sup> <a name="default_root_object" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.defaultRootObject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}.

---

##### `http_version`<sup>Optional</sup> <a name="http_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.httpVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ipv6_enabled`<sup>Optional</sup> <a name="is_ipv6_enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.isIpv6Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}

---

##### `ordered_cache_behavior`<sup>Optional</sup> <a name="ordered_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.orderedCacheBehavior"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]

ordered_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}

---

##### `origin_group`<sup>Optional</sup> <a name="origin_group" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.originGroup"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]

origin_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}

---

##### `price_class`<sup>Optional</sup> <a name="price_class" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.priceClass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}.

---

##### `retain_on_delete`<sup>Optional</sup> <a name="retain_on_delete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.retainOnDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}.

---

##### `wait_for_deployment`<sup>Optional</sup> <a name="wait_for_deployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.waitForDeployment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.

---

##### `web_acl_id`<sup>Optional</sup> <a name="web_acl_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.Initializer.parameter.webAclId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse">put_custom_error_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior">put_default_cache_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior">put_ordered_cache_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin">put_origin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup">put_origin_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions">put_restrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate">put_viewer_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases">reset_aliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse">reset_custom_error_response</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject">reset_default_root_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion">reset_http_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled">reset_is_ipv6_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior">reset_ordered_cache_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup">reset_origin_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass">reset_price_class</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete">reset_retain_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment">reset_wait_for_deployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId">reset_web_acl_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_error_response` <a name="put_custom_error_response" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse"></a>

```python
def put_custom_error_response(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putCustomErrorResponse.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]

---

##### `put_default_cache_behavior` <a name="put_default_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior"></a>

```python
def put_default_cache_behavior(
  allowed_methods: typing.List[str],
  cached_methods: typing.List[str],
  target_origin_id: str,
  viewer_protocol_policy: str,
  cache_policy_id: str = None,
  compress: typing.Union[bool, IResolvable] = None,
  default_ttl: typing.Union[int, float] = None,
  field_level_encryption_id: str = None,
  forwarded_values: CloudfrontDistributionDefaultCacheBehaviorForwardedValues = None,
  function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]] = None,
  lambda_function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]] = None,
  max_ttl: typing.Union[int, float] = None,
  min_ttl: typing.Union[int, float] = None,
  origin_request_policy_id: str = None,
  realtime_log_config_arn: str = None,
  response_headers_policy_id: str = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None,
  trusted_key_groups: typing.List[str] = None,
  trusted_signers: typing.List[str] = None
) -> None
```

###### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.allowedMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

###### `cached_methods`<sup>Required</sup> <a name="cached_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.cachedMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

###### `target_origin_id`<sup>Required</sup> <a name="target_origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.targetOriginId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

###### `viewer_protocol_policy`<sup>Required</sup> <a name="viewer_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.viewerProtocolPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

###### `cache_policy_id`<sup>Optional</sup> <a name="cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.cachePolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

###### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.compress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

###### `field_level_encryption_id`<sup>Optional</sup> <a name="field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.fieldLevelEncryptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

###### `forwarded_values`<sup>Optional</sup> <a name="forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.forwardedValues"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

###### `function_association`<sup>Optional</sup> <a name="function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.functionAssociation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

###### `lambda_function_association`<sup>Optional</sup> <a name="lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.lambdaFunctionAssociation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

###### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

###### `min_ttl`<sup>Optional</sup> <a name="min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.minTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

###### `origin_request_policy_id`<sup>Optional</sup> <a name="origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.originRequestPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

###### `realtime_log_config_arn`<sup>Optional</sup> <a name="realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.realtimeLogConfigArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

###### `response_headers_policy_id`<sup>Optional</sup> <a name="response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.responseHeadersPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

###### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.smoothStreaming"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

###### `trusted_key_groups`<sup>Optional</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.trustedKeyGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

###### `trusted_signers`<sup>Optional</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putDefaultCacheBehavior.parameter.trustedSigners"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig"></a>

```python
def put_logging_config(
  bucket: str,
  include_cookies: typing.Union[bool, IResolvable] = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}.

---

###### `include_cookies`<sup>Optional</sup> <a name="include_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.includeCookies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putLoggingConfig.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}.

---

##### `put_ordered_cache_behavior` <a name="put_ordered_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior"></a>

```python
def put_ordered_cache_behavior(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrderedCacheBehavior.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]

---

##### `put_origin` <a name="put_origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin"></a>

```python
def put_origin(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOrigin.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]

---

##### `put_origin_group` <a name="put_origin_group" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup"></a>

```python
def put_origin_group(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putOriginGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]

---

##### `put_restrictions` <a name="put_restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions"></a>

```python
def put_restrictions(
  geo_restriction: CloudfrontDistributionRestrictionsGeoRestriction
) -> None
```

###### `geo_restriction`<sup>Required</sup> <a name="geo_restriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putRestrictions.parameter.geoRestriction"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

geo_restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}

---

##### `put_viewer_certificate` <a name="put_viewer_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate"></a>

```python
def put_viewer_certificate(
  acm_certificate_arn: str = None,
  cloudfront_default_certificate: typing.Union[bool, IResolvable] = None,
  iam_certificate_id: str = None,
  minimum_protocol_version: str = None,
  ssl_support_method: str = None
) -> None
```

###### `acm_certificate_arn`<sup>Optional</sup> <a name="acm_certificate_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.acmCertificateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.

---

###### `cloudfront_default_certificate`<sup>Optional</sup> <a name="cloudfront_default_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.cloudfrontDefaultCertificate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.

---

###### `iam_certificate_id`<sup>Optional</sup> <a name="iam_certificate_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.iamCertificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.

---

###### `minimum_protocol_version`<sup>Optional</sup> <a name="minimum_protocol_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.minimumProtocolVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.

---

###### `ssl_support_method`<sup>Optional</sup> <a name="ssl_support_method" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.putViewerCertificate.parameter.sslSupportMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}.

---

##### `reset_aliases` <a name="reset_aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetAliases"></a>

```python
def reset_aliases() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_custom_error_response` <a name="reset_custom_error_response" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetCustomErrorResponse"></a>

```python
def reset_custom_error_response() -> None
```

##### `reset_default_root_object` <a name="reset_default_root_object" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetDefaultRootObject"></a>

```python
def reset_default_root_object() -> None
```

##### `reset_http_version` <a name="reset_http_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetHttpVersion"></a>

```python
def reset_http_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_ipv6_enabled` <a name="reset_is_ipv6_enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetIsIpv6Enabled"></a>

```python
def reset_is_ipv6_enabled() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_ordered_cache_behavior` <a name="reset_ordered_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOrderedCacheBehavior"></a>

```python
def reset_ordered_cache_behavior() -> None
```

##### `reset_origin_group` <a name="reset_origin_group" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetOriginGroup"></a>

```python
def reset_origin_group() -> None
```

##### `reset_price_class` <a name="reset_price_class" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetPriceClass"></a>

```python
def reset_price_class() -> None
```

##### `reset_retain_on_delete` <a name="reset_retain_on_delete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetRetainOnDelete"></a>

```python
def reset_retain_on_delete() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_wait_for_deployment` <a name="reset_wait_for_deployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWaitForDeployment"></a>

```python
def reset_wait_for_deployment() -> None
```

##### `reset_web_acl_id` <a name="reset_web_acl_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.resetWebAclId"></a>

```python
def reset_web_acl_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistribution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistribution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistribution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference">caller_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse">custom_error_response</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches">in_progress_validation_batches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior">ordered_cache_behavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin">origin</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup">origin_group</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups">trusted_key_groups</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners">trusted_signers</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate">viewer_certificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput">aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput">custom_error_response_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput">default_cache_behavior_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput">default_root_object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput">http_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput">is_ipv6_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput">logging_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput">ordered_cache_behavior_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput">origin_group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput">origin_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput">price_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput">restrictions_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput">retain_on_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput">viewer_certificate_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput">wait_for_deployment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput">web_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject">default_root_object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion">http_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass">price_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete">retain_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment">wait_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId">web_acl_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `caller_reference`<sup>Required</sup> <a name="caller_reference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.callerReference"></a>

```python
caller_reference: str
```

- *Type:* str

---

##### `custom_error_response`<sup>Required</sup> <a name="custom_error_response" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponse"></a>

```python
custom_error_response: CloudfrontDistributionCustomErrorResponseList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList">CloudfrontDistributionCustomErrorResponseList</a>

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehavior"></a>

```python
default_cache_behavior: CloudfrontDistributionDefaultCacheBehaviorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference">CloudfrontDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `in_progress_validation_batches`<sup>Required</sup> <a name="in_progress_validation_batches" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.inProgressValidationBatches"></a>

```python
in_progress_validation_batches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfig"></a>

```python
logging_config: CloudfrontDistributionLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference">CloudfrontDistributionLoggingConfigOutputReference</a>

---

##### `ordered_cache_behavior`<sup>Required</sup> <a name="ordered_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehavior"></a>

```python
ordered_cache_behavior: CloudfrontDistributionOrderedCacheBehaviorList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList">CloudfrontDistributionOrderedCacheBehaviorList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.origin"></a>

```python
origin: CloudfrontDistributionOriginList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList">CloudfrontDistributionOriginList</a>

---

##### `origin_group`<sup>Required</sup> <a name="origin_group" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroup"></a>

```python
origin_group: CloudfrontDistributionOriginGroupList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList">CloudfrontDistributionOriginGroupList</a>

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictions"></a>

```python
restrictions: CloudfrontDistributionRestrictionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference">CloudfrontDistributionRestrictionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `trusted_key_groups`<sup>Required</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedKeyGroups"></a>

```python
trusted_key_groups: CloudfrontDistributionTrustedKeyGroupsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList">CloudfrontDistributionTrustedKeyGroupsList</a>

---

##### `trusted_signers`<sup>Required</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.trustedSigners"></a>

```python
trusted_signers: CloudfrontDistributionTrustedSignersList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList">CloudfrontDistributionTrustedSignersList</a>

---

##### `viewer_certificate`<sup>Required</sup> <a name="viewer_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificate"></a>

```python
viewer_certificate: CloudfrontDistributionViewerCertificateOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference">CloudfrontDistributionViewerCertificateOutputReference</a>

---

##### `aliases_input`<sup>Optional</sup> <a name="aliases_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliasesInput"></a>

```python
aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `custom_error_response_input`<sup>Optional</sup> <a name="custom_error_response_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.customErrorResponseInput"></a>

```python
custom_error_response_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]

---

##### `default_cache_behavior_input`<sup>Optional</sup> <a name="default_cache_behavior_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultCacheBehaviorInput"></a>

```python
default_cache_behavior_input: CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---

##### `default_root_object_input`<sup>Optional</sup> <a name="default_root_object_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObjectInput"></a>

```python
default_root_object_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_version_input`<sup>Optional</sup> <a name="http_version_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersionInput"></a>

```python
http_version_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_ipv6_enabled_input`<sup>Optional</sup> <a name="is_ipv6_enabled_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6EnabledInput"></a>

```python
is_ipv6_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.loggingConfigInput"></a>

```python
logging_config_input: CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---

##### `ordered_cache_behavior_input`<sup>Optional</sup> <a name="ordered_cache_behavior_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.orderedCacheBehaviorInput"></a>

```python
ordered_cache_behavior_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]

---

##### `origin_group_input`<sup>Optional</sup> <a name="origin_group_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originGroupInput"></a>

```python
origin_group_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]

---

##### `origin_input`<sup>Optional</sup> <a name="origin_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.originInput"></a>

```python
origin_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]

---

##### `price_class_input`<sup>Optional</sup> <a name="price_class_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClassInput"></a>

```python
price_class_input: str
```

- *Type:* str

---

##### `restrictions_input`<sup>Optional</sup> <a name="restrictions_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.restrictionsInput"></a>

```python
restrictions_input: CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---

##### `retain_on_delete_input`<sup>Optional</sup> <a name="retain_on_delete_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDeleteInput"></a>

```python
retain_on_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `viewer_certificate_input`<sup>Optional</sup> <a name="viewer_certificate_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.viewerCertificateInput"></a>

```python
viewer_certificate_input: CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---

##### `wait_for_deployment_input`<sup>Optional</sup> <a name="wait_for_deployment_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeploymentInput"></a>

```python
wait_for_deployment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_acl_id_input`<sup>Optional</sup> <a name="web_acl_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclIdInput"></a>

```python
web_acl_id_input: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default_root_object`<sup>Required</sup> <a name="default_root_object" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.defaultRootObject"></a>

```python
default_root_object: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_version`<sup>Required</sup> <a name="http_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.httpVersion"></a>

```python
http_version: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ipv6_enabled`<sup>Required</sup> <a name="is_ipv6_enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.isIpv6Enabled"></a>

```python
is_ipv6_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `price_class`<sup>Required</sup> <a name="price_class" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.priceClass"></a>

```python
price_class: str
```

- *Type:* str

---

##### `retain_on_delete`<sup>Required</sup> <a name="retain_on_delete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.retainOnDelete"></a>

```python
retain_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `wait_for_deployment`<sup>Required</sup> <a name="wait_for_deployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.waitForDeployment"></a>

```python
wait_for_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `web_acl_id`<sup>Required</sup> <a name="web_acl_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.webAclId"></a>

```python
web_acl_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistribution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionConfig <a name="CloudfrontDistributionConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_cache_behavior: CloudfrontDistributionDefaultCacheBehavior,
  enabled: typing.Union[bool, IResolvable],
  origin: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]],
  restrictions: CloudfrontDistributionRestrictions,
  viewer_certificate: CloudfrontDistributionViewerCertificate,
  aliases: typing.List[str] = None,
  comment: str = None,
  custom_error_response: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]] = None,
  default_root_object: str = None,
  http_version: str = None,
  id: str = None,
  is_ipv6_enabled: typing.Union[bool, IResolvable] = None,
  logging_config: CloudfrontDistributionLoggingConfig = None,
  ordered_cache_behavior: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]] = None,
  origin_group: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]] = None,
  price_class: str = None,
  retain_on_delete: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  wait_for_deployment: typing.Union[bool, IResolvable] = None,
  web_acl_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior">default_cache_behavior</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | default_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin">origin</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]</code> | origin block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate">viewer_certificate</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | viewer_certificate block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse">custom_error_response</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]</code> | custom_error_response block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject">default_root_object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion">http_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled">is_ipv6_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior">ordered_cache_behavior</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]</code> | ordered_cache_behavior block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup">origin_group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]</code> | origin_group block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass">price_class</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete">retain_on_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment">wait_for_deployment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId">web_acl_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_cache_behavior`<sup>Required</sup> <a name="default_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultCacheBehavior"></a>

```python
default_cache_behavior: CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

default_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_cache_behavior CloudfrontDistribution#default_cache_behavior}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.origin"></a>

```python
origin: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]

origin block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin CloudfrontDistribution#origin}

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.restrictions"></a>

```python
restrictions: CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restrictions CloudfrontDistribution#restrictions}

---

##### `viewer_certificate`<sup>Required</sup> <a name="viewer_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.viewerCertificate"></a>

```python
viewer_certificate: CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

viewer_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_certificate CloudfrontDistribution#viewer_certificate}

---

##### `aliases`<sup>Optional</sup> <a name="aliases" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#aliases CloudfrontDistribution#aliases}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#comment CloudfrontDistribution#comment}.

---

##### `custom_error_response`<sup>Optional</sup> <a name="custom_error_response" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.customErrorResponse"></a>

```python
custom_error_response: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]

custom_error_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_error_response CloudfrontDistribution#custom_error_response}

---

##### `default_root_object`<sup>Optional</sup> <a name="default_root_object" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.defaultRootObject"></a>

```python
default_root_object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_root_object CloudfrontDistribution#default_root_object}.

---

##### `http_version`<sup>Optional</sup> <a name="http_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.httpVersion"></a>

```python
http_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_version CloudfrontDistribution#http_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#id CloudfrontDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_ipv6_enabled`<sup>Optional</sup> <a name="is_ipv6_enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.isIpv6Enabled"></a>

```python
is_ipv6_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#is_ipv6_enabled CloudfrontDistribution#is_ipv6_enabled}.

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.loggingConfig"></a>

```python
logging_config: CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#logging_config CloudfrontDistribution#logging_config}

---

##### `ordered_cache_behavior`<sup>Optional</sup> <a name="ordered_cache_behavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.orderedCacheBehavior"></a>

```python
ordered_cache_behavior: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]

ordered_cache_behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ordered_cache_behavior CloudfrontDistribution#ordered_cache_behavior}

---

##### `origin_group`<sup>Optional</sup> <a name="origin_group" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.originGroup"></a>

```python
origin_group: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]

origin_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_group CloudfrontDistribution#origin_group}

---

##### `price_class`<sup>Optional</sup> <a name="price_class" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.priceClass"></a>

```python
price_class: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#price_class CloudfrontDistribution#price_class}.

---

##### `retain_on_delete`<sup>Optional</sup> <a name="retain_on_delete" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.retainOnDelete"></a>

```python
retain_on_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#retain_on_delete CloudfrontDistribution#retain_on_delete}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags CloudfrontDistribution#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#tags_all CloudfrontDistribution#tags_all}.

---

##### `wait_for_deployment`<sup>Optional</sup> <a name="wait_for_deployment" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.waitForDeployment"></a>

```python
wait_for_deployment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#wait_for_deployment CloudfrontDistribution#wait_for_deployment}.

---

##### `web_acl_id`<sup>Optional</sup> <a name="web_acl_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionConfig.property.webAclId"></a>

```python
web_acl_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#web_acl_id CloudfrontDistribution#web_acl_id}.

---

### CloudfrontDistributionCustomErrorResponse <a name="CloudfrontDistributionCustomErrorResponse" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse(
  error_code: typing.Union[int, float],
  error_caching_min_ttl: typing.Union[int, float] = None,
  response_code: typing.Union[int, float] = None,
  response_page_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode">error_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl">error_caching_min_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath">response_page_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}. |

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCode"></a>

```python
error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_code CloudfrontDistribution#error_code}.

---

##### `error_caching_min_ttl`<sup>Optional</sup> <a name="error_caching_min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.errorCachingMinTtl"></a>

```python
error_caching_min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#error_caching_min_ttl CloudfrontDistribution#error_caching_min_ttl}.

---

##### `response_code`<sup>Optional</sup> <a name="response_code" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_code CloudfrontDistribution#response_code}.

---

##### `response_page_path`<sup>Optional</sup> <a name="response_page_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse.property.responsePagePath"></a>

```python
response_page_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_page_path CloudfrontDistribution#response_page_path}.

---

### CloudfrontDistributionDefaultCacheBehavior <a name="CloudfrontDistributionDefaultCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior(
  allowed_methods: typing.List[str],
  cached_methods: typing.List[str],
  target_origin_id: str,
  viewer_protocol_policy: str,
  cache_policy_id: str = None,
  compress: typing.Union[bool, IResolvable] = None,
  default_ttl: typing.Union[int, float] = None,
  field_level_encryption_id: str = None,
  forwarded_values: CloudfrontDistributionDefaultCacheBehaviorForwardedValues = None,
  function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]] = None,
  lambda_function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]] = None,
  max_ttl: typing.Union[int, float] = None,
  min_ttl: typing.Union[int, float] = None,
  origin_request_policy_id: str = None,
  realtime_log_config_arn: str = None,
  response_headers_policy_id: str = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None,
  trusted_key_groups: typing.List[str] = None,
  trusted_signers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods">cached_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId">target_origin_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy">viewer_protocol_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId">cache_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress">compress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId">field_level_encryption_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues">forwarded_values</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation">function_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation">lambda_function_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId">origin_request_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn">realtime_log_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId">response_headers_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups">trusted_key_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners">trusted_signers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `cached_methods`<sup>Required</sup> <a name="cached_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachedMethods"></a>

```python
cached_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `target_origin_id`<sup>Required</sup> <a name="target_origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.targetOriginId"></a>

```python
target_origin_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `viewer_protocol_policy`<sup>Required</sup> <a name="viewer_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.viewerProtocolPolicy"></a>

```python
viewer_protocol_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `cache_policy_id`<sup>Optional</sup> <a name="cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.cachePolicyId"></a>

```python
cache_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.compress"></a>

```python
compress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `field_level_encryption_id`<sup>Optional</sup> <a name="field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.fieldLevelEncryptionId"></a>

```python
field_level_encryption_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `forwarded_values`<sup>Optional</sup> <a name="forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.forwardedValues"></a>

```python
forwarded_values: CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `function_association`<sup>Optional</sup> <a name="function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.functionAssociation"></a>

```python
function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `lambda_function_association`<sup>Optional</sup> <a name="lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.lambdaFunctionAssociation"></a>

```python
lambda_function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `min_ttl`<sup>Optional</sup> <a name="min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `origin_request_policy_id`<sup>Optional</sup> <a name="origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.originRequestPolicyId"></a>

```python
origin_request_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `realtime_log_config_arn`<sup>Optional</sup> <a name="realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.realtimeLogConfigArn"></a>

```python
realtime_log_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `response_headers_policy_id`<sup>Optional</sup> <a name="response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.responseHeadersPolicyId"></a>

```python
response_headers_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `trusted_key_groups`<sup>Optional</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedKeyGroups"></a>

```python
trusted_key_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `trusted_signers`<sup>Optional</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior.property.trustedSigners"></a>

```python
trusted_signers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValues <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues(
  cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies,
  query_string: typing.Union[bool, IResolvable],
  headers: typing.List[str] = None,
  query_string_cache_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString">query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers">headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys">query_string_cache_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.cookies"></a>

```python
cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryString"></a>

```python
query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `query_string_cache_keys`<sup>Optional</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```python
query_string_cache_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies(
  forward: str,
  whitelisted_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward">forward</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames">whitelisted_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.forward"></a>

```python
forward: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `whitelisted_names`<sup>Optional</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```python
whitelisted_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation(
  event_type: str,
  function_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation(
  event_type: str,
  lambda_arn: str,
  include_body: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody">include_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `include_body`<sup>Optional</sup> <a name="include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```python
include_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionLoggingConfig <a name="CloudfrontDistributionLoggingConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionLoggingConfig(
  bucket: str,
  include_cookies: typing.Union[bool, IResolvable] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies">include_cookies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#bucket CloudfrontDistribution#bucket}.

---

##### `include_cookies`<sup>Optional</sup> <a name="include_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.includeCookies"></a>

```python
include_cookies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_cookies CloudfrontDistribution#include_cookies}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#prefix CloudfrontDistribution#prefix}.

---

### CloudfrontDistributionOrderedCacheBehavior <a name="CloudfrontDistributionOrderedCacheBehavior" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior(
  allowed_methods: typing.List[str],
  cached_methods: typing.List[str],
  path_pattern: str,
  target_origin_id: str,
  viewer_protocol_policy: str,
  cache_policy_id: str = None,
  compress: typing.Union[bool, IResolvable] = None,
  default_ttl: typing.Union[int, float] = None,
  field_level_encryption_id: str = None,
  forwarded_values: CloudfrontDistributionOrderedCacheBehaviorForwardedValues = None,
  function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation]] = None,
  lambda_function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation]] = None,
  max_ttl: typing.Union[int, float] = None,
  min_ttl: typing.Union[int, float] = None,
  origin_request_policy_id: str = None,
  realtime_log_config_arn: str = None,
  response_headers_policy_id: str = None,
  smooth_streaming: typing.Union[bool, IResolvable] = None,
  trusted_key_groups: typing.List[str] = None,
  trusted_signers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods">cached_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern">path_pattern</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId">target_origin_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy">viewer_protocol_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId">cache_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress">compress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId">field_level_encryption_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues">forwarded_values</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | forwarded_values block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation">function_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]</code> | function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation">lambda_function_association</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]</code> | lambda_function_association block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId">origin_request_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn">realtime_log_config_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId">response_headers_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups">trusted_key_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners">trusted_signers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#allowed_methods CloudfrontDistribution#allowed_methods}.

---

##### `cached_methods`<sup>Required</sup> <a name="cached_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachedMethods"></a>

```python
cached_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cached_methods CloudfrontDistribution#cached_methods}.

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#path_pattern CloudfrontDistribution#path_pattern}.

---

##### `target_origin_id`<sup>Required</sup> <a name="target_origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.targetOriginId"></a>

```python
target_origin_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#target_origin_id CloudfrontDistribution#target_origin_id}.

---

##### `viewer_protocol_policy`<sup>Required</sup> <a name="viewer_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.viewerProtocolPolicy"></a>

```python
viewer_protocol_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#viewer_protocol_policy CloudfrontDistribution#viewer_protocol_policy}.

---

##### `cache_policy_id`<sup>Optional</sup> <a name="cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.cachePolicyId"></a>

```python
cache_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cache_policy_id CloudfrontDistribution#cache_policy_id}.

---

##### `compress`<sup>Optional</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.compress"></a>

```python
compress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#compress CloudfrontDistribution#compress}.

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#default_ttl CloudfrontDistribution#default_ttl}.

---

##### `field_level_encryption_id`<sup>Optional</sup> <a name="field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.fieldLevelEncryptionId"></a>

```python
field_level_encryption_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#field_level_encryption_id CloudfrontDistribution#field_level_encryption_id}.

---

##### `forwarded_values`<sup>Optional</sup> <a name="forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.forwardedValues"></a>

```python
forwarded_values: CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

forwarded_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forwarded_values CloudfrontDistribution#forwarded_values}

---

##### `function_association`<sup>Optional</sup> <a name="function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.functionAssociation"></a>

```python
function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]

function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_association CloudfrontDistribution#function_association}

---

##### `lambda_function_association`<sup>Optional</sup> <a name="lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.lambdaFunctionAssociation"></a>

```python
lambda_function_association: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]

lambda_function_association block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_function_association CloudfrontDistribution#lambda_function_association}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#max_ttl CloudfrontDistribution#max_ttl}.

---

##### `min_ttl`<sup>Optional</sup> <a name="min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#min_ttl CloudfrontDistribution#min_ttl}.

---

##### `origin_request_policy_id`<sup>Optional</sup> <a name="origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.originRequestPolicyId"></a>

```python
origin_request_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_request_policy_id CloudfrontDistribution#origin_request_policy_id}.

---

##### `realtime_log_config_arn`<sup>Optional</sup> <a name="realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.realtimeLogConfigArn"></a>

```python
realtime_log_config_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#realtime_log_config_arn CloudfrontDistribution#realtime_log_config_arn}.

---

##### `response_headers_policy_id`<sup>Optional</sup> <a name="response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.responseHeadersPolicyId"></a>

```python
response_headers_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#response_headers_policy_id CloudfrontDistribution#response_headers_policy_id}.

---

##### `smooth_streaming`<sup>Optional</sup> <a name="smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#smooth_streaming CloudfrontDistribution#smooth_streaming}.

---

##### `trusted_key_groups`<sup>Optional</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedKeyGroups"></a>

```python
trusted_key_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_key_groups CloudfrontDistribution#trusted_key_groups}.

---

##### `trusted_signers`<sup>Optional</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior.property.trustedSigners"></a>

```python
trusted_signers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#trusted_signers CloudfrontDistribution#trusted_signers}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValues <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValues" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues(
  cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies,
  query_string: typing.Union[bool, IResolvable],
  headers: typing.List[str] = None,
  query_string_cache_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | cookies block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString">query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers">headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys">query_string_cache_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}. |

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.cookies"></a>

```python
cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryString"></a>

```python
query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

##### `query_string_cache_keys`<sup>Optional</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues.property.queryStringCacheKeys"></a>

```python
query_string_cache_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies(
  forward: str,
  whitelisted_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward">forward</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames">whitelisted_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}. |

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.forward"></a>

```python
forward: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

##### `whitelisted_names`<sup>Optional</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies.property.whitelistedNames"></a>

```python
whitelisted_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation(
  event_type: str,
  function_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn">function_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#function_arn CloudfrontDistribution#function_arn}.

---

### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation(
  event_type: str,
  lambda_arn: str,
  include_body: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType">event_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody">include_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}. |

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#event_type CloudfrontDistribution#event_type}.

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#lambda_arn CloudfrontDistribution#lambda_arn}.

---

##### `include_body`<sup>Optional</sup> <a name="include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation.property.includeBody"></a>

```python
include_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#include_body CloudfrontDistribution#include_body}.

---

### CloudfrontDistributionOrigin <a name="CloudfrontDistributionOrigin" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrigin(
  domain_name: str,
  origin_id: str,
  connection_attempts: typing.Union[int, float] = None,
  connection_timeout: typing.Union[int, float] = None,
  custom_header: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginCustomHeader]] = None,
  custom_origin_config: CloudfrontDistributionOriginCustomOriginConfig = None,
  origin_access_control_id: str = None,
  origin_path: str = None,
  origin_shield: CloudfrontDistributionOriginOriginShield = None,
  s3_origin_config: CloudfrontDistributionOriginS3OriginConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName">domain_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId">origin_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts">connection_attempts</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader">custom_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]</code> | custom_header block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig">custom_origin_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | custom_origin_config block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId">origin_access_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath">origin_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield">origin_shield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | origin_shield block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig">s3_origin_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | s3_origin_config block. |

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#domain_name CloudfrontDistribution#domain_name}.

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

##### `connection_attempts`<sup>Optional</sup> <a name="connection_attempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionAttempts"></a>

```python
connection_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_attempts CloudfrontDistribution#connection_attempts}.

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#connection_timeout CloudfrontDistribution#connection_timeout}.

---

##### `custom_header`<sup>Optional</sup> <a name="custom_header" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customHeader"></a>

```python
custom_header: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]

custom_header block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_header CloudfrontDistribution#custom_header}

---

##### `custom_origin_config`<sup>Optional</sup> <a name="custom_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.customOriginConfig"></a>

```python
custom_origin_config: CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

custom_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#custom_origin_config CloudfrontDistribution#custom_origin_config}

---

##### `origin_access_control_id`<sup>Optional</sup> <a name="origin_access_control_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originAccessControlId"></a>

```python
origin_access_control_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_control_id CloudfrontDistribution#origin_access_control_id}.

---

##### `origin_path`<sup>Optional</sup> <a name="origin_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originPath"></a>

```python
origin_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_path CloudfrontDistribution#origin_path}.

---

##### `origin_shield`<sup>Optional</sup> <a name="origin_shield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.originShield"></a>

```python
origin_shield: CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

origin_shield block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield CloudfrontDistribution#origin_shield}

---

##### `s3_origin_config`<sup>Optional</sup> <a name="s3_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin.property.s3OriginConfig"></a>

```python
s3_origin_config: CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

s3_origin_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#s3_origin_config CloudfrontDistribution#s3_origin_config}

---

### CloudfrontDistributionOriginCustomHeader <a name="CloudfrontDistributionOriginCustomHeader" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#name CloudfrontDistribution#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#value CloudfrontDistribution#value}.

---

### CloudfrontDistributionOriginCustomOriginConfig <a name="CloudfrontDistributionOriginCustomOriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig(
  http_port: typing.Union[int, float],
  https_port: typing.Union[int, float],
  origin_protocol_policy: str,
  origin_ssl_protocols: typing.List[str],
  origin_keepalive_timeout: typing.Union[int, float] = None,
  origin_read_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy">origin_protocol_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols">origin_ssl_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout">origin_keepalive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout">origin_read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}. |

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}.

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}.

---

##### `origin_protocol_policy`<sup>Required</sup> <a name="origin_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originProtocolPolicy"></a>

```python
origin_protocol_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.

---

##### `origin_ssl_protocols`<sup>Required</sup> <a name="origin_ssl_protocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originSslProtocols"></a>

```python
origin_ssl_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.

---

##### `origin_keepalive_timeout`<sup>Optional</sup> <a name="origin_keepalive_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originKeepaliveTimeout"></a>

```python
origin_keepalive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.

---

##### `origin_read_timeout`<sup>Optional</sup> <a name="origin_read_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig.property.originReadTimeout"></a>

```python
origin_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.

---

### CloudfrontDistributionOriginGroup <a name="CloudfrontDistributionOriginGroup" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroup(
  failover_criteria: CloudfrontDistributionOriginGroupFailoverCriteria,
  member: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroupMember]],
  origin_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria">failover_criteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | failover_criteria block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member">member</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]</code> | member block. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId">origin_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `failover_criteria`<sup>Required</sup> <a name="failover_criteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.failoverCriteria"></a>

```python
failover_criteria: CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

failover_criteria block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#failover_criteria CloudfrontDistribution#failover_criteria}

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.member"></a>

```python
member: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroupMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]

member block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#member CloudfrontDistribution#member}

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginGroupFailoverCriteria <a name="CloudfrontDistributionOriginGroupFailoverCriteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria(
  status_codes: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes">status_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}. |

---

##### `status_codes`<sup>Required</sup> <a name="status_codes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria.property.statusCodes"></a>

```python
status_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}.

---

### CloudfrontDistributionOriginGroupMember <a name="CloudfrontDistributionOriginGroupMember" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupMember(
  origin_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId">origin_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}. |

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_id CloudfrontDistribution#origin_id}.

---

### CloudfrontDistributionOriginOriginShield <a name="CloudfrontDistributionOriginOriginShield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginOriginShield(
  enabled: typing.Union[bool, IResolvable],
  origin_shield_region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion">origin_shield_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

##### `origin_shield_region`<sup>Required</sup> <a name="origin_shield_region" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield.property.originShieldRegion"></a>

```python
origin_shield_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}.

---

### CloudfrontDistributionOriginS3OriginConfig <a name="CloudfrontDistributionOriginS3OriginConfig" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig(
  origin_access_identity: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity">origin_access_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}. |

---

##### `origin_access_identity`<sup>Required</sup> <a name="origin_access_identity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig.property.originAccessIdentity"></a>

```python
origin_access_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}.

---

### CloudfrontDistributionRestrictions <a name="CloudfrontDistributionRestrictions" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionRestrictions(
  geo_restriction: CloudfrontDistributionRestrictionsGeoRestriction
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction">geo_restriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | geo_restriction block. |

---

##### `geo_restriction`<sup>Required</sup> <a name="geo_restriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions.property.geoRestriction"></a>

```python
geo_restriction: CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

geo_restriction block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#geo_restriction CloudfrontDistribution#geo_restriction}

---

### CloudfrontDistributionRestrictionsGeoRestriction <a name="CloudfrontDistributionRestrictionsGeoRestriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction(
  restriction_type: str,
  locations: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType">restriction_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations">locations</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}. |

---

##### `restriction_type`<sup>Required</sup> <a name="restriction_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.restrictionType"></a>

```python
restriction_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}.

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}.

---

### CloudfrontDistributionTrustedKeyGroups <a name="CloudfrontDistributionTrustedKeyGroups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups()
```


### CloudfrontDistributionTrustedKeyGroupsItems <a name="CloudfrontDistributionTrustedKeyGroupsItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems()
```


### CloudfrontDistributionTrustedSigners <a name="CloudfrontDistributionTrustedSigners" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSigners()
```


### CloudfrontDistributionTrustedSignersItems <a name="CloudfrontDistributionTrustedSignersItems" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems()
```


### CloudfrontDistributionViewerCertificate <a name="CloudfrontDistributionViewerCertificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionViewerCertificate(
  acm_certificate_arn: str = None,
  cloudfront_default_certificate: typing.Union[bool, IResolvable] = None,
  iam_certificate_id: str = None,
  minimum_protocol_version: str = None,
  ssl_support_method: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate">cloudfront_default_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId">iam_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion">minimum_protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod">ssl_support_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}. |

---

##### `acm_certificate_arn`<sup>Optional</sup> <a name="acm_certificate_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.acmCertificateArn"></a>

```python
acm_certificate_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#acm_certificate_arn CloudfrontDistribution#acm_certificate_arn}.

---

##### `cloudfront_default_certificate`<sup>Optional</sup> <a name="cloudfront_default_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.cloudfrontDefaultCertificate"></a>

```python
cloudfront_default_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cloudfront_default_certificate CloudfrontDistribution#cloudfront_default_certificate}.

---

##### `iam_certificate_id`<sup>Optional</sup> <a name="iam_certificate_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.iamCertificateId"></a>

```python
iam_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#iam_certificate_id CloudfrontDistribution#iam_certificate_id}.

---

##### `minimum_protocol_version`<sup>Optional</sup> <a name="minimum_protocol_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.minimumProtocolVersion"></a>

```python
minimum_protocol_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#minimum_protocol_version CloudfrontDistribution#minimum_protocol_version}.

---

##### `ssl_support_method`<sup>Optional</sup> <a name="ssl_support_method" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate.property.sslSupportMethod"></a>

```python
ssl_support_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#ssl_support_method CloudfrontDistribution#ssl_support_method}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionCustomErrorResponseList <a name="CloudfrontDistributionCustomErrorResponseList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionCustomErrorResponseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionCustomErrorResponse]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>]]

---


### CloudfrontDistributionCustomErrorResponseOutputReference <a name="CloudfrontDistributionCustomErrorResponseOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl">reset_error_caching_min_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode">reset_response_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath">reset_response_page_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_caching_min_ttl` <a name="reset_error_caching_min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetErrorCachingMinTtl"></a>

```python
def reset_error_caching_min_ttl() -> None
```

##### `reset_response_code` <a name="reset_response_code" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponseCode"></a>

```python
def reset_response_code() -> None
```

##### `reset_response_page_path` <a name="reset_response_page_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.resetResponsePagePath"></a>

```python
def reset_response_page_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput">error_caching_min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput">error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput">response_page_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl">error_caching_min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode">error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath">response_page_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_caching_min_ttl_input`<sup>Optional</sup> <a name="error_caching_min_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtlInput"></a>

```python
error_caching_min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_code_input`<sup>Optional</sup> <a name="error_code_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCodeInput"></a>

```python
error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_page_path_input`<sup>Optional</sup> <a name="response_page_path_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePathInput"></a>

```python
response_page_path_input: str
```

- *Type:* str

---

##### `error_caching_min_ttl`<sup>Required</sup> <a name="error_caching_min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCachingMinTtl"></a>

```python
error_caching_min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `error_code`<sup>Required</sup> <a name="error_code" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.errorCode"></a>

```python
error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `response_page_path`<sup>Required</sup> <a name="response_page_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.responsePagePath"></a>

```python
response_page_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionCustomErrorResponse, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionCustomErrorResponse">CloudfrontDistributionCustomErrorResponse</a>, cdktf.IResolvable]

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">reset_whitelisted_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_whitelisted_names` <a name="reset_whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```python
def reset_whitelisted_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">forward_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">whitelisted_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">forward</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">whitelisted_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```python
forward_input: str
```

- *Type:* str

---

##### `whitelisted_names_input`<sup>Optional</sup> <a name="whitelisted_names_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```python
whitelisted_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```python
forward: str
```

- *Type:* str

---

##### `whitelisted_names`<sup>Required</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```python
whitelisted_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies">put_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">reset_query_string_cache_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookies` <a name="put_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```python
def put_cookies(
  forward: str,
  whitelisted_names: typing.List[str] = None
) -> None
```

###### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.forward"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

###### `whitelisted_names`<sup>Optional</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.whitelistedNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_string_cache_keys` <a name="reset_query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```python
def reset_query_string_cache_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">cookies_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">query_string_cache_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">query_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString">query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">query_string_cache_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```python
cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `cookies_input`<sup>Optional</sup> <a name="cookies_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```python
cookies_input: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```python
headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_cache_keys_input`<sup>Optional</sup> <a name="query_string_cache_keys_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```python
query_string_cache_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```python
query_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```python
query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_cache_keys`<sup>Required</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```python
query_string_cache_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]

---


### CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>, cdktf.IResolvable]

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]

---


### CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">reset_include_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_body` <a name="reset_include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```python
def reset_include_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">include_body_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">include_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `include_body_input`<sup>Optional</sup> <a name="include_body_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```python
include_body_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `include_body`<sup>Required</sup> <a name="include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```python
include_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>, cdktf.IResolvable]

---


### CloudfrontDistributionDefaultCacheBehaviorOutputReference <a name="CloudfrontDistributionDefaultCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues">put_forwarded_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation">put_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation">put_lambda_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId">reset_cache_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress">reset_compress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId">reset_field_level_encryption_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues">reset_forwarded_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation">reset_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation">reset_lambda_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl">reset_min_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId">reset_origin_request_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn">reset_realtime_log_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId">reset_response_headers_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming">reset_smooth_streaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups">reset_trusted_key_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners">reset_trusted_signers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forwarded_values` <a name="put_forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues"></a>

```python
def put_forwarded_values(
  cookies: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies,
  query_string: typing.Union[bool, IResolvable],
  headers: typing.List[str] = None,
  query_string_cache_keys: typing.List[str] = None
) -> None
```

###### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.cookies"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

###### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.queryString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.headers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

###### `query_string_cache_keys`<sup>Optional</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putForwardedValues.parameter.queryStringCacheKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

##### `put_function_association` <a name="put_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation"></a>

```python
def put_function_association(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]

---

##### `put_lambda_function_association` <a name="put_lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```python
def put_lambda_function_association(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]

---

##### `reset_cache_policy_id` <a name="reset_cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCachePolicyId"></a>

```python
def reset_cache_policy_id() -> None
```

##### `reset_compress` <a name="reset_compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetCompress"></a>

```python
def reset_compress() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_field_level_encryption_id` <a name="reset_field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```python
def reset_field_level_encryption_id() -> None
```

##### `reset_forwarded_values` <a name="reset_forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetForwardedValues"></a>

```python
def reset_forwarded_values() -> None
```

##### `reset_function_association` <a name="reset_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```python
def reset_function_association() -> None
```

##### `reset_lambda_function_association` <a name="reset_lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```python
def reset_lambda_function_association() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_min_ttl` <a name="reset_min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetMinTtl"></a>

```python
def reset_min_ttl() -> None
```

##### `reset_origin_request_policy_id` <a name="reset_origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```python
def reset_origin_request_policy_id() -> None
```

##### `reset_realtime_log_config_arn` <a name="reset_realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```python
def reset_realtime_log_config_arn() -> None
```

##### `reset_response_headers_policy_id` <a name="reset_response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```python
def reset_response_headers_policy_id() -> None
```

##### `reset_smooth_streaming` <a name="reset_smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```python
def reset_smooth_streaming() -> None
```

##### `reset_trusted_key_groups` <a name="reset_trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```python
def reset_trusted_key_groups() -> None
```

##### `reset_trusted_signers` <a name="reset_trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.resetTrustedSigners"></a>

```python
def reset_trusted_signers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues">forwarded_values</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation">function_association</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation">lambda_function_association</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput">cached_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput">cache_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput">compress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">field_level_encryption_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput">forwarded_values_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput">function_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">lambda_function_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput">min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput">origin_request_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">realtime_log_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">response_headers_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput">smooth_streaming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput">target_origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput">trusted_key_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput">trusted_signers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">viewer_protocol_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods">cached_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId">cache_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress">compress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId">field_level_encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId">origin_request_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn">realtime_log_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId">response_headers_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId">target_origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups">trusted_key_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners">trusted_signers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy">viewer_protocol_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarded_values`<sup>Required</sup> <a name="forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValues"></a>

```python
forwarded_values: CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionDefaultCacheBehaviorForwardedValuesOutputReference</a>

---

##### `function_association`<sup>Required</sup> <a name="function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociation"></a>

```python
function_association: CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociationList</a>

---

##### `lambda_function_association`<sup>Required</sup> <a name="lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```python
lambda_function_association: CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cached_methods_input`<sup>Optional</sup> <a name="cached_methods_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```python
cached_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_policy_id_input`<sup>Optional</sup> <a name="cache_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```python
cache_policy_id_input: str
```

- *Type:* str

---

##### `compress_input`<sup>Optional</sup> <a name="compress_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compressInput"></a>

```python
compress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_level_encryption_id_input`<sup>Optional</sup> <a name="field_level_encryption_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```python
field_level_encryption_id_input: str
```

- *Type:* str

---

##### `forwarded_values_input`<sup>Optional</sup> <a name="forwarded_values_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```python
forwarded_values_input: CloudfrontDistributionDefaultCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorForwardedValues">CloudfrontDistributionDefaultCacheBehaviorForwardedValues</a>

---

##### `function_association_input`<sup>Optional</sup> <a name="function_association_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```python
function_association_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorFunctionAssociation</a>]]

---

##### `lambda_function_association_input`<sup>Optional</sup> <a name="lambda_function_association_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```python
lambda_function_association_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionDefaultCacheBehaviorLambdaFunctionAssociation</a>]]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl_input`<sup>Optional</sup> <a name="min_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtlInput"></a>

```python
min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_request_policy_id_input`<sup>Optional</sup> <a name="origin_request_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```python
origin_request_policy_id_input: str
```

- *Type:* str

---

##### `realtime_log_config_arn_input`<sup>Optional</sup> <a name="realtime_log_config_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```python
realtime_log_config_arn_input: str
```

- *Type:* str

---

##### `response_headers_policy_id_input`<sup>Optional</sup> <a name="response_headers_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```python
response_headers_policy_id_input: str
```

- *Type:* str

---

##### `smooth_streaming_input`<sup>Optional</sup> <a name="smooth_streaming_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```python
smooth_streaming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_origin_id_input`<sup>Optional</sup> <a name="target_origin_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```python
target_origin_id_input: str
```

- *Type:* str

---

##### `trusted_key_groups_input`<sup>Optional</sup> <a name="trusted_key_groups_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```python
trusted_key_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_signers_input`<sup>Optional</sup> <a name="trusted_signers_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```python
trusted_signers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `viewer_protocol_policy_input`<sup>Optional</sup> <a name="viewer_protocol_policy_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```python
viewer_protocol_policy_input: str
```

- *Type:* str

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cached_methods`<sup>Required</sup> <a name="cached_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachedMethods"></a>

```python
cached_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_policy_id`<sup>Required</sup> <a name="cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.cachePolicyId"></a>

```python
cache_policy_id: str
```

- *Type:* str

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.compress"></a>

```python
compress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_level_encryption_id`<sup>Required</sup> <a name="field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```python
field_level_encryption_id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_request_policy_id`<sup>Required</sup> <a name="origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```python
origin_request_policy_id: str
```

- *Type:* str

---

##### `realtime_log_config_arn`<sup>Required</sup> <a name="realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```python
realtime_log_config_arn: str
```

- *Type:* str

---

##### `response_headers_policy_id`<sup>Required</sup> <a name="response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```python
response_headers_policy_id: str
```

- *Type:* str

---

##### `smooth_streaming`<sup>Required</sup> <a name="smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_origin_id`<sup>Required</sup> <a name="target_origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.targetOriginId"></a>

```python
target_origin_id: str
```

- *Type:* str

---

##### `trusted_key_groups`<sup>Required</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```python
trusted_key_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_signers`<sup>Required</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.trustedSigners"></a>

```python
trusted_signers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `viewer_protocol_policy`<sup>Required</sup> <a name="viewer_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```python
viewer_protocol_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionDefaultCacheBehavior
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionDefaultCacheBehavior">CloudfrontDistributionDefaultCacheBehavior</a>

---


### CloudfrontDistributionLoggingConfigOutputReference <a name="CloudfrontDistributionLoggingConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies">reset_include_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_cookies` <a name="reset_include_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetIncludeCookies"></a>

```python
def reset_include_cookies() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput">include_cookies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies">include_cookies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `include_cookies_input`<sup>Optional</sup> <a name="include_cookies_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookiesInput"></a>

```python
include_cookies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `include_cookies`<sup>Required</sup> <a name="include_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.includeCookies"></a>

```python
include_cookies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionLoggingConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionLoggingConfig">CloudfrontDistributionLoggingConfig</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames">reset_whitelisted_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_whitelisted_names` <a name="reset_whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.resetWhitelistedNames"></a>

```python
def reset_whitelisted_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput">forward_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput">whitelisted_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward">forward</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames">whitelisted_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forward_input`<sup>Optional</sup> <a name="forward_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forwardInput"></a>

```python
forward_input: str
```

- *Type:* str

---

##### `whitelisted_names_input`<sup>Optional</sup> <a name="whitelisted_names_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNamesInput"></a>

```python
whitelisted_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.forward"></a>

```python
forward: str
```

- *Type:* str

---

##### `whitelisted_names`<sup>Required</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.whitelistedNames"></a>

```python
whitelisted_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---


### CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies">put_cookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys">reset_query_string_cache_keys</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cookies` <a name="put_cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies"></a>

```python
def put_cookies(
  forward: str,
  whitelisted_names: typing.List[str] = None
) -> None
```

###### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.forward"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#forward CloudfrontDistribution#forward}.

---

###### `whitelisted_names`<sup>Optional</sup> <a name="whitelisted_names" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.putCookies.parameter.whitelistedNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#whitelisted_names CloudfrontDistribution#whitelisted_names}.

---

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_query_string_cache_keys` <a name="reset_query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.resetQueryStringCacheKeys"></a>

```python
def reset_query_string_cache_keys() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies">cookies</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput">cookies_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput">headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput">query_string_cache_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput">query_string_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers">headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString">query_string</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys">query_string_cache_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookies"></a>

```python
cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookiesOutputReference</a>

---

##### `cookies_input`<sup>Optional</sup> <a name="cookies_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.cookiesInput"></a>

```python
cookies_input: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headersInput"></a>

```python
headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_cache_keys_input`<sup>Optional</sup> <a name="query_string_cache_keys_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeysInput"></a>

```python
query_string_cache_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringInput"></a>

```python
query_string_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.headers"></a>

```python
headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryString"></a>

```python
query_string: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_string_cache_keys`<sup>Required</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.queryStringCacheKeys"></a>

```python
query_string_cache_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]

---


### CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput">function_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn">function_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `function_arn_input`<sup>Optional</sup> <a name="function_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArnInput"></a>

```python
function_arn_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `function_arn`<sup>Required</sup> <a name="function_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.functionArn"></a>

```python
function_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]

---


### CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody">reset_include_body</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_body` <a name="reset_include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.resetIncludeBody"></a>

```python
def reset_include_body() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput">include_body_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput">lambda_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody">include_body</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn">lambda_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `include_body_input`<sup>Optional</sup> <a name="include_body_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBodyInput"></a>

```python
include_body_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lambda_arn_input`<sup>Optional</sup> <a name="lambda_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArnInput"></a>

```python
lambda_arn_input: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `include_body`<sup>Required</sup> <a name="include_body" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.includeBody"></a>

```python
include_body: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lambda_arn`<sup>Required</sup> <a name="lambda_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.lambdaArn"></a>

```python
lambda_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOrderedCacheBehaviorList <a name="CloudfrontDistributionOrderedCacheBehaviorList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOrderedCacheBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehavior]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>]]

---


### CloudfrontDistributionOrderedCacheBehaviorOutputReference <a name="CloudfrontDistributionOrderedCacheBehaviorOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues">put_forwarded_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation">put_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation">put_lambda_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId">reset_cache_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress">reset_compress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId">reset_field_level_encryption_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues">reset_forwarded_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation">reset_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation">reset_lambda_function_association</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl">reset_min_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId">reset_origin_request_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn">reset_realtime_log_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId">reset_response_headers_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming">reset_smooth_streaming</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups">reset_trusted_key_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners">reset_trusted_signers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forwarded_values` <a name="put_forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues"></a>

```python
def put_forwarded_values(
  cookies: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies,
  query_string: typing.Union[bool, IResolvable],
  headers: typing.List[str] = None,
  query_string_cache_keys: typing.List[str] = None
) -> None
```

###### `cookies`<sup>Required</sup> <a name="cookies" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.cookies"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesCookies</a>

cookies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#cookies CloudfrontDistribution#cookies}

---

###### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.queryString"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string CloudfrontDistribution#query_string}.

---

###### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.headers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#headers CloudfrontDistribution#headers}.

---

###### `query_string_cache_keys`<sup>Optional</sup> <a name="query_string_cache_keys" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putForwardedValues.parameter.queryStringCacheKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#query_string_cache_keys CloudfrontDistribution#query_string_cache_keys}.

---

##### `put_function_association` <a name="put_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation"></a>

```python
def put_function_association(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putFunctionAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]

---

##### `put_lambda_function_association` <a name="put_lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation"></a>

```python
def put_lambda_function_association(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.putLambdaFunctionAssociation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]

---

##### `reset_cache_policy_id` <a name="reset_cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCachePolicyId"></a>

```python
def reset_cache_policy_id() -> None
```

##### `reset_compress` <a name="reset_compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetCompress"></a>

```python
def reset_compress() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_field_level_encryption_id` <a name="reset_field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFieldLevelEncryptionId"></a>

```python
def reset_field_level_encryption_id() -> None
```

##### `reset_forwarded_values` <a name="reset_forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetForwardedValues"></a>

```python
def reset_forwarded_values() -> None
```

##### `reset_function_association` <a name="reset_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetFunctionAssociation"></a>

```python
def reset_function_association() -> None
```

##### `reset_lambda_function_association` <a name="reset_lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetLambdaFunctionAssociation"></a>

```python
def reset_lambda_function_association() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_min_ttl` <a name="reset_min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetMinTtl"></a>

```python
def reset_min_ttl() -> None
```

##### `reset_origin_request_policy_id` <a name="reset_origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetOriginRequestPolicyId"></a>

```python
def reset_origin_request_policy_id() -> None
```

##### `reset_realtime_log_config_arn` <a name="reset_realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetRealtimeLogConfigArn"></a>

```python
def reset_realtime_log_config_arn() -> None
```

##### `reset_response_headers_policy_id` <a name="reset_response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetResponseHeadersPolicyId"></a>

```python
def reset_response_headers_policy_id() -> None
```

##### `reset_smooth_streaming` <a name="reset_smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetSmoothStreaming"></a>

```python
def reset_smooth_streaming() -> None
```

##### `reset_trusted_key_groups` <a name="reset_trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedKeyGroups"></a>

```python
def reset_trusted_key_groups() -> None
```

##### `reset_trusted_signers` <a name="reset_trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.resetTrustedSigners"></a>

```python
def reset_trusted_signers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues">forwarded_values</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation">function_association</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation">lambda_function_association</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput">cached_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput">cache_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput">compress_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput">field_level_encryption_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput">forwarded_values_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput">function_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput">lambda_function_association_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput">min_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput">origin_request_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput">path_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput">realtime_log_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput">response_headers_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput">smooth_streaming_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput">target_origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput">trusted_key_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput">trusted_signers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput">viewer_protocol_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods">cached_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId">cache_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress">compress</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId">field_level_encryption_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl">min_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId">origin_request_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern">path_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn">realtime_log_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId">response_headers_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming">smooth_streaming</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId">target_origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups">trusted_key_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners">trusted_signers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy">viewer_protocol_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forwarded_values`<sup>Required</sup> <a name="forwarded_values" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValues"></a>

```python
forwarded_values: CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference">CloudfrontDistributionOrderedCacheBehaviorForwardedValuesOutputReference</a>

---

##### `function_association`<sup>Required</sup> <a name="function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociation"></a>

```python
function_association: CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociationList</a>

---

##### `lambda_function_association`<sup>Required</sup> <a name="lambda_function_association" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociation"></a>

```python
lambda_function_association: CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociationList</a>

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cached_methods_input`<sup>Optional</sup> <a name="cached_methods_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethodsInput"></a>

```python
cached_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_policy_id_input`<sup>Optional</sup> <a name="cache_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyIdInput"></a>

```python
cache_policy_id_input: str
```

- *Type:* str

---

##### `compress_input`<sup>Optional</sup> <a name="compress_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compressInput"></a>

```python
compress_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_level_encryption_id_input`<sup>Optional</sup> <a name="field_level_encryption_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionIdInput"></a>

```python
field_level_encryption_id_input: str
```

- *Type:* str

---

##### `forwarded_values_input`<sup>Optional</sup> <a name="forwarded_values_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.forwardedValuesInput"></a>

```python
forwarded_values_input: CloudfrontDistributionOrderedCacheBehaviorForwardedValues
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorForwardedValues">CloudfrontDistributionOrderedCacheBehaviorForwardedValues</a>

---

##### `function_association_input`<sup>Optional</sup> <a name="function_association_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.functionAssociationInput"></a>

```python
function_association_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorFunctionAssociation</a>]]

---

##### `lambda_function_association_input`<sup>Optional</sup> <a name="lambda_function_association_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.lambdaFunctionAssociationInput"></a>

```python
lambda_function_association_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation">CloudfrontDistributionOrderedCacheBehaviorLambdaFunctionAssociation</a>]]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl_input`<sup>Optional</sup> <a name="min_ttl_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtlInput"></a>

```python
min_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_request_policy_id_input`<sup>Optional</sup> <a name="origin_request_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyIdInput"></a>

```python
origin_request_policy_id_input: str
```

- *Type:* str

---

##### `path_pattern_input`<sup>Optional</sup> <a name="path_pattern_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPatternInput"></a>

```python
path_pattern_input: str
```

- *Type:* str

---

##### `realtime_log_config_arn_input`<sup>Optional</sup> <a name="realtime_log_config_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArnInput"></a>

```python
realtime_log_config_arn_input: str
```

- *Type:* str

---

##### `response_headers_policy_id_input`<sup>Optional</sup> <a name="response_headers_policy_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyIdInput"></a>

```python
response_headers_policy_id_input: str
```

- *Type:* str

---

##### `smooth_streaming_input`<sup>Optional</sup> <a name="smooth_streaming_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreamingInput"></a>

```python
smooth_streaming_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_origin_id_input`<sup>Optional</sup> <a name="target_origin_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginIdInput"></a>

```python
target_origin_id_input: str
```

- *Type:* str

---

##### `trusted_key_groups_input`<sup>Optional</sup> <a name="trusted_key_groups_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroupsInput"></a>

```python
trusted_key_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_signers_input`<sup>Optional</sup> <a name="trusted_signers_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSignersInput"></a>

```python
trusted_signers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `viewer_protocol_policy_input`<sup>Optional</sup> <a name="viewer_protocol_policy_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicyInput"></a>

```python
viewer_protocol_policy_input: str
```

- *Type:* str

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cached_methods`<sup>Required</sup> <a name="cached_methods" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachedMethods"></a>

```python
cached_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cache_policy_id`<sup>Required</sup> <a name="cache_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.cachePolicyId"></a>

```python
cache_policy_id: str
```

- *Type:* str

---

##### `compress`<sup>Required</sup> <a name="compress" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.compress"></a>

```python
compress: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `field_level_encryption_id`<sup>Required</sup> <a name="field_level_encryption_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.fieldLevelEncryptionId"></a>

```python
field_level_encryption_id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_ttl`<sup>Required</sup> <a name="min_ttl" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.minTtl"></a>

```python
min_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_request_policy_id`<sup>Required</sup> <a name="origin_request_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.originRequestPolicyId"></a>

```python
origin_request_policy_id: str
```

- *Type:* str

---

##### `path_pattern`<sup>Required</sup> <a name="path_pattern" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.pathPattern"></a>

```python
path_pattern: str
```

- *Type:* str

---

##### `realtime_log_config_arn`<sup>Required</sup> <a name="realtime_log_config_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.realtimeLogConfigArn"></a>

```python
realtime_log_config_arn: str
```

- *Type:* str

---

##### `response_headers_policy_id`<sup>Required</sup> <a name="response_headers_policy_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.responseHeadersPolicyId"></a>

```python
response_headers_policy_id: str
```

- *Type:* str

---

##### `smooth_streaming`<sup>Required</sup> <a name="smooth_streaming" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.smoothStreaming"></a>

```python
smooth_streaming: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_origin_id`<sup>Required</sup> <a name="target_origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.targetOriginId"></a>

```python
target_origin_id: str
```

- *Type:* str

---

##### `trusted_key_groups`<sup>Required</sup> <a name="trusted_key_groups" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedKeyGroups"></a>

```python
trusted_key_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_signers`<sup>Required</sup> <a name="trusted_signers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.trustedSigners"></a>

```python
trusted_signers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `viewer_protocol_policy`<sup>Required</sup> <a name="viewer_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.viewerProtocolPolicy"></a>

```python
viewer_protocol_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOrderedCacheBehavior, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrderedCacheBehavior">CloudfrontDistributionOrderedCacheBehavior</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOriginCustomHeaderList <a name="CloudfrontDistributionOriginCustomHeaderList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOriginCustomHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]

---


### CloudfrontDistributionOriginCustomHeaderOutputReference <a name="CloudfrontDistributionOriginCustomHeaderOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOriginCustomHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOriginCustomOriginConfigOutputReference <a name="CloudfrontDistributionOriginCustomOriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout">reset_origin_keepalive_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout">reset_origin_read_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_origin_keepalive_timeout` <a name="reset_origin_keepalive_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginKeepaliveTimeout"></a>

```python
def reset_origin_keepalive_timeout() -> None
```

##### `reset_origin_read_timeout` <a name="reset_origin_read_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.resetOriginReadTimeout"></a>

```python
def reset_origin_read_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput">http_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput">https_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput">origin_keepalive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput">origin_protocol_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput">origin_read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput">origin_ssl_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout">origin_keepalive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy">origin_protocol_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout">origin_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols">origin_ssl_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_port_input`<sup>Optional</sup> <a name="http_port_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPortInput"></a>

```python
http_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port_input`<sup>Optional</sup> <a name="https_port_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPortInput"></a>

```python
https_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_keepalive_timeout_input`<sup>Optional</sup> <a name="origin_keepalive_timeout_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeoutInput"></a>

```python
origin_keepalive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_protocol_policy_input`<sup>Optional</sup> <a name="origin_protocol_policy_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicyInput"></a>

```python
origin_protocol_policy_input: str
```

- *Type:* str

---

##### `origin_read_timeout_input`<sup>Optional</sup> <a name="origin_read_timeout_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeoutInput"></a>

```python
origin_read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_ssl_protocols_input`<sup>Optional</sup> <a name="origin_ssl_protocols_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocolsInput"></a>

```python
origin_ssl_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_keepalive_timeout`<sup>Required</sup> <a name="origin_keepalive_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originKeepaliveTimeout"></a>

```python
origin_keepalive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_protocol_policy`<sup>Required</sup> <a name="origin_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originProtocolPolicy"></a>

```python
origin_protocol_policy: str
```

- *Type:* str

---

##### `origin_read_timeout`<sup>Required</sup> <a name="origin_read_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originReadTimeout"></a>

```python
origin_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin_ssl_protocols`<sup>Required</sup> <a name="origin_ssl_protocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.originSslProtocols"></a>

```python
origin_ssl_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---


### CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference <a name="CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput">status_codes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes">status_codes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `status_codes_input`<sup>Optional</sup> <a name="status_codes_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodesInput"></a>

```python
status_codes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `status_codes`<sup>Required</sup> <a name="status_codes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.statusCodes"></a>

```python
status_codes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---


### CloudfrontDistributionOriginGroupList <a name="CloudfrontDistributionOriginGroupList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>]]

---


### CloudfrontDistributionOriginGroupMemberList <a name="CloudfrontDistributionOriginGroupMemberList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOriginGroupMemberOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroupMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]

---


### CloudfrontDistributionOriginGroupMemberOutputReference <a name="CloudfrontDistributionOriginGroupMemberOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput">origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId">origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_id_input`<sup>Optional</sup> <a name="origin_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originIdInput"></a>

```python
origin_id_input: str
```

- *Type:* str

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOriginGroupMember, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOriginGroupOutputReference <a name="CloudfrontDistributionOriginGroupOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria">put_failover_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember">put_member</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_failover_criteria` <a name="put_failover_criteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria"></a>

```python
def put_failover_criteria(
  status_codes: typing.List[typing.Union[int, float]]
) -> None
```

###### `status_codes`<sup>Required</sup> <a name="status_codes" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putFailoverCriteria.parameter.statusCodes"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#status_codes CloudfrontDistribution#status_codes}.

---

##### `put_member` <a name="put_member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember"></a>

```python
def put_member(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroupMember]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.putMember.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria">failover_criteria</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member">member</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput">failover_criteria_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput">member_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput">origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId">origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failover_criteria`<sup>Required</sup> <a name="failover_criteria" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteria"></a>

```python
failover_criteria: CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference">CloudfrontDistributionOriginGroupFailoverCriteriaOutputReference</a>

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.member"></a>

```python
member: CloudfrontDistributionOriginGroupMemberList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMemberList">CloudfrontDistributionOriginGroupMemberList</a>

---

##### `failover_criteria_input`<sup>Optional</sup> <a name="failover_criteria_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.failoverCriteriaInput"></a>

```python
failover_criteria_input: CloudfrontDistributionOriginGroupFailoverCriteria
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupFailoverCriteria">CloudfrontDistributionOriginGroupFailoverCriteria</a>

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.memberInput"></a>

```python
member_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginGroupMember]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupMember">CloudfrontDistributionOriginGroupMember</a>]]

---

##### `origin_id_input`<sup>Optional</sup> <a name="origin_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originIdInput"></a>

```python
origin_id_input: str
```

- *Type:* str

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOriginGroup, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginGroup">CloudfrontDistributionOriginGroup</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOriginList <a name="CloudfrontDistributionOriginList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionOriginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOrigin]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>]]

---


### CloudfrontDistributionOriginOriginShieldOutputReference <a name="CloudfrontDistributionOriginOriginShieldOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput">origin_shield_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion">origin_shield_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_shield_region_input`<sup>Optional</sup> <a name="origin_shield_region_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegionInput"></a>

```python
origin_shield_region_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `origin_shield_region`<sup>Required</sup> <a name="origin_shield_region" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.originShieldRegion"></a>

```python
origin_shield_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---


### CloudfrontDistributionOriginOutputReference <a name="CloudfrontDistributionOriginOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader">put_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig">put_custom_origin_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield">put_origin_shield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig">put_s3_origin_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts">reset_connection_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout">reset_connection_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader">reset_custom_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig">reset_custom_origin_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId">reset_origin_access_control_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath">reset_origin_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield">reset_origin_shield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig">reset_s3_origin_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_header` <a name="put_custom_header" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader"></a>

```python
def put_custom_header(
  value: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginCustomHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]

---

##### `put_custom_origin_config` <a name="put_custom_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig"></a>

```python
def put_custom_origin_config(
  http_port: typing.Union[int, float],
  https_port: typing.Union[int, float],
  origin_protocol_policy: str,
  origin_ssl_protocols: typing.List[str],
  origin_keepalive_timeout: typing.Union[int, float] = None,
  origin_read_timeout: typing.Union[int, float] = None
) -> None
```

###### `http_port`<sup>Required</sup> <a name="http_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.httpPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#http_port CloudfrontDistribution#http_port}.

---

###### `https_port`<sup>Required</sup> <a name="https_port" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.httpsPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#https_port CloudfrontDistribution#https_port}.

---

###### `origin_protocol_policy`<sup>Required</sup> <a name="origin_protocol_policy" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.originProtocolPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_protocol_policy CloudfrontDistribution#origin_protocol_policy}.

---

###### `origin_ssl_protocols`<sup>Required</sup> <a name="origin_ssl_protocols" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.originSslProtocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_ssl_protocols CloudfrontDistribution#origin_ssl_protocols}.

---

###### `origin_keepalive_timeout`<sup>Optional</sup> <a name="origin_keepalive_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.originKeepaliveTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_keepalive_timeout CloudfrontDistribution#origin_keepalive_timeout}.

---

###### `origin_read_timeout`<sup>Optional</sup> <a name="origin_read_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putCustomOriginConfig.parameter.originReadTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_read_timeout CloudfrontDistribution#origin_read_timeout}.

---

##### `put_origin_shield` <a name="put_origin_shield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield"></a>

```python
def put_origin_shield(
  enabled: typing.Union[bool, IResolvable],
  origin_shield_region: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#enabled CloudfrontDistribution#enabled}.

---

###### `origin_shield_region`<sup>Required</sup> <a name="origin_shield_region" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putOriginShield.parameter.originShieldRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_shield_region CloudfrontDistribution#origin_shield_region}.

---

##### `put_s3_origin_config` <a name="put_s3_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig"></a>

```python
def put_s3_origin_config(
  origin_access_identity: str
) -> None
```

###### `origin_access_identity`<sup>Required</sup> <a name="origin_access_identity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.putS3OriginConfig.parameter.originAccessIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#origin_access_identity CloudfrontDistribution#origin_access_identity}.

---

##### `reset_connection_attempts` <a name="reset_connection_attempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionAttempts"></a>

```python
def reset_connection_attempts() -> None
```

##### `reset_connection_timeout` <a name="reset_connection_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetConnectionTimeout"></a>

```python
def reset_connection_timeout() -> None
```

##### `reset_custom_header` <a name="reset_custom_header" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomHeader"></a>

```python
def reset_custom_header() -> None
```

##### `reset_custom_origin_config` <a name="reset_custom_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetCustomOriginConfig"></a>

```python
def reset_custom_origin_config() -> None
```

##### `reset_origin_access_control_id` <a name="reset_origin_access_control_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginAccessControlId"></a>

```python
def reset_origin_access_control_id() -> None
```

##### `reset_origin_path` <a name="reset_origin_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginPath"></a>

```python
def reset_origin_path() -> None
```

##### `reset_origin_shield` <a name="reset_origin_shield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetOriginShield"></a>

```python
def reset_origin_shield() -> None
```

##### `reset_s3_origin_config` <a name="reset_s3_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.resetS3OriginConfig"></a>

```python
def reset_s3_origin_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader">custom_header</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig">custom_origin_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield">origin_shield</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig">s3_origin_config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput">connection_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput">connection_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput">custom_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput">custom_origin_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput">origin_access_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput">origin_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput">origin_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput">origin_shield_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput">s3_origin_config_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts">connection_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId">origin_access_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId">origin_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath">origin_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_header`<sup>Required</sup> <a name="custom_header" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeader"></a>

```python
custom_header: CloudfrontDistributionOriginCustomHeaderList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeaderList">CloudfrontDistributionOriginCustomHeaderList</a>

---

##### `custom_origin_config`<sup>Required</sup> <a name="custom_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfig"></a>

```python
custom_origin_config: CloudfrontDistributionOriginCustomOriginConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfigOutputReference">CloudfrontDistributionOriginCustomOriginConfigOutputReference</a>

---

##### `origin_shield`<sup>Required</sup> <a name="origin_shield" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShield"></a>

```python
origin_shield: CloudfrontDistributionOriginOriginShieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShieldOutputReference">CloudfrontDistributionOriginOriginShieldOutputReference</a>

---

##### `s3_origin_config`<sup>Required</sup> <a name="s3_origin_config" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfig"></a>

```python
s3_origin_config: CloudfrontDistributionOriginS3OriginConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference">CloudfrontDistributionOriginS3OriginConfigOutputReference</a>

---

##### `connection_attempts_input`<sup>Optional</sup> <a name="connection_attempts_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttemptsInput"></a>

```python
connection_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_timeout_input`<sup>Optional</sup> <a name="connection_timeout_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeoutInput"></a>

```python
connection_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_header_input`<sup>Optional</sup> <a name="custom_header_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customHeaderInput"></a>

```python
custom_header_input: typing.Union[IResolvable, typing.List[CloudfrontDistributionOriginCustomHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomHeader">CloudfrontDistributionOriginCustomHeader</a>]]

---

##### `custom_origin_config_input`<sup>Optional</sup> <a name="custom_origin_config_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.customOriginConfigInput"></a>

```python
custom_origin_config_input: CloudfrontDistributionOriginCustomOriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginCustomOriginConfig">CloudfrontDistributionOriginCustomOriginConfig</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `origin_access_control_id_input`<sup>Optional</sup> <a name="origin_access_control_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlIdInput"></a>

```python
origin_access_control_id_input: str
```

- *Type:* str

---

##### `origin_id_input`<sup>Optional</sup> <a name="origin_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originIdInput"></a>

```python
origin_id_input: str
```

- *Type:* str

---

##### `origin_path_input`<sup>Optional</sup> <a name="origin_path_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPathInput"></a>

```python
origin_path_input: str
```

- *Type:* str

---

##### `origin_shield_input`<sup>Optional</sup> <a name="origin_shield_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originShieldInput"></a>

```python
origin_shield_input: CloudfrontDistributionOriginOriginShield
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOriginShield">CloudfrontDistributionOriginOriginShield</a>

---

##### `s3_origin_config_input`<sup>Optional</sup> <a name="s3_origin_config_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.s3OriginConfigInput"></a>

```python
s3_origin_config_input: CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---

##### `connection_attempts`<sup>Required</sup> <a name="connection_attempts" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionAttempts"></a>

```python
connection_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `origin_access_control_id`<sup>Required</sup> <a name="origin_access_control_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originAccessControlId"></a>

```python
origin_access_control_id: str
```

- *Type:* str

---

##### `origin_id`<sup>Required</sup> <a name="origin_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originId"></a>

```python
origin_id: str
```

- *Type:* str

---

##### `origin_path`<sup>Required</sup> <a name="origin_path" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.originPath"></a>

```python
origin_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[CloudfrontDistributionOrigin, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOrigin">CloudfrontDistributionOrigin</a>, cdktf.IResolvable]

---


### CloudfrontDistributionOriginS3OriginConfigOutputReference <a name="CloudfrontDistributionOriginS3OriginConfigOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput">origin_access_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity">origin_access_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin_access_identity_input`<sup>Optional</sup> <a name="origin_access_identity_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentityInput"></a>

```python
origin_access_identity_input: str
```

- *Type:* str

---

##### `origin_access_identity`<sup>Required</sup> <a name="origin_access_identity" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.originAccessIdentity"></a>

```python
origin_access_identity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfigOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionOriginS3OriginConfig
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionOriginS3OriginConfig">CloudfrontDistributionOriginS3OriginConfig</a>

---


### CloudfrontDistributionRestrictionsGeoRestrictionOutputReference <a name="CloudfrontDistributionRestrictionsGeoRestrictionOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations">reset_locations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_locations` <a name="reset_locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.resetLocations"></a>

```python
def reset_locations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput">locations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput">restriction_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType">restriction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `locations_input`<sup>Optional</sup> <a name="locations_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locationsInput"></a>

```python
locations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_type_input`<sup>Optional</sup> <a name="restriction_type_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```python
restriction_type_input: str
```

- *Type:* str

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.locations"></a>

```python
locations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `restriction_type`<sup>Required</sup> <a name="restriction_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.restrictionType"></a>

```python
restriction_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---


### CloudfrontDistributionRestrictionsOutputReference <a name="CloudfrontDistributionRestrictionsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction">put_geo_restriction</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_geo_restriction` <a name="put_geo_restriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction"></a>

```python
def put_geo_restriction(
  restriction_type: str,
  locations: typing.List[str] = None
) -> None
```

###### `restriction_type`<sup>Required</sup> <a name="restriction_type" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction.parameter.restrictionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#restriction_type CloudfrontDistribution#restriction_type}.

---

###### `locations`<sup>Optional</sup> <a name="locations" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.putGeoRestriction.parameter.locations"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_distribution#locations CloudfrontDistribution#locations}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction">geo_restriction</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput">geo_restriction_input</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `geo_restriction`<sup>Required</sup> <a name="geo_restriction" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestriction"></a>

```python
geo_restriction: CloudfrontDistributionRestrictionsGeoRestrictionOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestrictionOutputReference">CloudfrontDistributionRestrictionsGeoRestrictionOutputReference</a>

---

##### `geo_restriction_input`<sup>Optional</sup> <a name="geo_restriction_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.geoRestrictionInput"></a>

```python
geo_restriction_input: CloudfrontDistributionRestrictionsGeoRestriction
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsGeoRestriction">CloudfrontDistributionRestrictionsGeoRestriction</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictionsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionRestrictions
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionRestrictions">CloudfrontDistributionRestrictions</a>

---


### CloudfrontDistributionTrustedKeyGroupsItemsList <a name="CloudfrontDistributionTrustedKeyGroupsItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTrustedKeyGroupsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudfrontDistributionTrustedKeyGroupsItemsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId">key_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds">key_pair_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_group_id`<sup>Required</sup> <a name="key_group_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyGroupId"></a>

```python
key_group_id: str
```

- *Type:* str

---

##### `key_pair_ids`<sup>Required</sup> <a name="key_pair_ids" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.keyPairIds"></a>

```python
key_pair_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionTrustedKeyGroupsItems
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItems">CloudfrontDistributionTrustedKeyGroupsItems</a>

---


### CloudfrontDistributionTrustedKeyGroupsList <a name="CloudfrontDistributionTrustedKeyGroupsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTrustedKeyGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudfrontDistributionTrustedKeyGroupsOutputReference <a name="CloudfrontDistributionTrustedKeyGroupsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.items"></a>

```python
items: CloudfrontDistributionTrustedKeyGroupsItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsItemsList">CloudfrontDistributionTrustedKeyGroupsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroupsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionTrustedKeyGroups
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedKeyGroups">CloudfrontDistributionTrustedKeyGroups</a>

---


### CloudfrontDistributionTrustedSignersItemsList <a name="CloudfrontDistributionTrustedSignersItemsList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTrustedSignersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudfrontDistributionTrustedSignersItemsOutputReference <a name="CloudfrontDistributionTrustedSignersItemsOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber">aws_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds">key_pair_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_account_number`<sup>Required</sup> <a name="aws_account_number" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.awsAccountNumber"></a>

```python
aws_account_number: str
```

- *Type:* str

---

##### `key_pair_ids`<sup>Required</sup> <a name="key_pair_ids" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.keyPairIds"></a>

```python
key_pair_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionTrustedSignersItems
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItems">CloudfrontDistributionTrustedSignersItems</a>

---


### CloudfrontDistributionTrustedSignersList <a name="CloudfrontDistributionTrustedSignersList" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSignersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudfrontDistributionTrustedSignersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CloudfrontDistributionTrustedSignersOutputReference <a name="CloudfrontDistributionTrustedSignersOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.items"></a>

```python
items: CloudfrontDistributionTrustedSignersItemsList
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersItemsList">CloudfrontDistributionTrustedSignersItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSignersOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionTrustedSigners
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionTrustedSigners">CloudfrontDistributionTrustedSigners</a>

---


### CloudfrontDistributionViewerCertificateOutputReference <a name="CloudfrontDistributionViewerCertificateOutputReference" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import cloudfront_distribution

cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn">reset_acm_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate">reset_cloudfront_default_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId">reset_iam_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion">reset_minimum_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod">reset_ssl_support_method</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_acm_certificate_arn` <a name="reset_acm_certificate_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetAcmCertificateArn"></a>

```python
def reset_acm_certificate_arn() -> None
```

##### `reset_cloudfront_default_certificate` <a name="reset_cloudfront_default_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetCloudfrontDefaultCertificate"></a>

```python
def reset_cloudfront_default_certificate() -> None
```

##### `reset_iam_certificate_id` <a name="reset_iam_certificate_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetIamCertificateId"></a>

```python
def reset_iam_certificate_id() -> None
```

##### `reset_minimum_protocol_version` <a name="reset_minimum_protocol_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetMinimumProtocolVersion"></a>

```python
def reset_minimum_protocol_version() -> None
```

##### `reset_ssl_support_method` <a name="reset_ssl_support_method" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.resetSslSupportMethod"></a>

```python
def reset_ssl_support_method() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput">acm_certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput">cloudfront_default_certificate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput">iam_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput">minimum_protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput">ssl_support_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn">acm_certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate">cloudfront_default_certificate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId">iam_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion">minimum_protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod">ssl_support_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `acm_certificate_arn_input`<sup>Optional</sup> <a name="acm_certificate_arn_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArnInput"></a>

```python
acm_certificate_arn_input: str
```

- *Type:* str

---

##### `cloudfront_default_certificate_input`<sup>Optional</sup> <a name="cloudfront_default_certificate_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificateInput"></a>

```python
cloudfront_default_certificate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_certificate_id_input`<sup>Optional</sup> <a name="iam_certificate_id_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateIdInput"></a>

```python
iam_certificate_id_input: str
```

- *Type:* str

---

##### `minimum_protocol_version_input`<sup>Optional</sup> <a name="minimum_protocol_version_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersionInput"></a>

```python
minimum_protocol_version_input: str
```

- *Type:* str

---

##### `ssl_support_method_input`<sup>Optional</sup> <a name="ssl_support_method_input" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethodInput"></a>

```python
ssl_support_method_input: str
```

- *Type:* str

---

##### `acm_certificate_arn`<sup>Required</sup> <a name="acm_certificate_arn" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.acmCertificateArn"></a>

```python
acm_certificate_arn: str
```

- *Type:* str

---

##### `cloudfront_default_certificate`<sup>Required</sup> <a name="cloudfront_default_certificate" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.cloudfrontDefaultCertificate"></a>

```python
cloudfront_default_certificate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_certificate_id`<sup>Required</sup> <a name="iam_certificate_id" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.iamCertificateId"></a>

```python
iam_certificate_id: str
```

- *Type:* str

---

##### `minimum_protocol_version`<sup>Required</sup> <a name="minimum_protocol_version" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.minimumProtocolVersion"></a>

```python
minimum_protocol_version: str
```

- *Type:* str

---

##### `ssl_support_method`<sup>Required</sup> <a name="ssl_support_method" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.sslSupportMethod"></a>

```python
ssl_support_method: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: CloudfrontDistributionViewerCertificate
```

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontDistribution.CloudfrontDistributionViewerCertificate">CloudfrontDistributionViewerCertificate</a>

---



