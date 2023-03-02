# `dataAwsOpensearchDomain` Submodule <a name="`dataAwsOpensearchDomain` Submodule" id="@cdktf/provider-aws.dataAwsOpensearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchDomain <a name="DataAwsOpensearchDomain" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain aws_opensearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomain(scope Construct, id *string, config DataAwsOpensearchDomainConfig) DataAwsOpensearchDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig">DataAwsOpensearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig">DataAwsOpensearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.DataAwsOpensearchDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.DataAwsOpensearchDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.DataAwsOpensearchDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.accessPolicies">AccessPolicies</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedOptions">AdvancedOptions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedSecurityOptions">AdvancedSecurityOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList">DataAwsOpensearchDomainAdvancedSecurityOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.autoTuneOptions">AutoTuneOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList">DataAwsOpensearchDomainAutoTuneOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList">DataAwsOpensearchDomainClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cognitoOptions">CognitoOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList">DataAwsOpensearchDomainCognitoOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.created">Created</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.deleted">Deleted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ebsOptions">EbsOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList">DataAwsOpensearchDomainEbsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList">DataAwsOpensearchDomainEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.kibanaEndpoint">KibanaEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList">DataAwsOpensearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.nodeToNodeEncryption">NodeToNodeEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList">DataAwsOpensearchDomainNodeToNodeEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.processing">Processing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.snapshotOptions">SnapshotOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList">DataAwsOpensearchDomainSnapshotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList">DataAwsOpensearchDomainVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessPolicies`<sup>Required</sup> <a name="AccessPolicies" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.accessPolicies"></a>

```go
func AccessPolicies() *string
```

- *Type:* *string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedOptions"></a>

```go
func AdvancedOptions() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AdvancedSecurityOptions`<sup>Required</sup> <a name="AdvancedSecurityOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.advancedSecurityOptions"></a>

```go
func AdvancedSecurityOptions() DataAwsOpensearchDomainAdvancedSecurityOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList">DataAwsOpensearchDomainAdvancedSecurityOptionsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AutoTuneOptions`<sup>Required</sup> <a name="AutoTuneOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.autoTuneOptions"></a>

```go
func AutoTuneOptions() DataAwsOpensearchDomainAutoTuneOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList">DataAwsOpensearchDomainAutoTuneOptionsList</a>

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.clusterConfig"></a>

```go
func ClusterConfig() DataAwsOpensearchDomainClusterConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList">DataAwsOpensearchDomainClusterConfigList</a>

---

##### `CognitoOptions`<sup>Required</sup> <a name="CognitoOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.cognitoOptions"></a>

```go
func CognitoOptions() DataAwsOpensearchDomainCognitoOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList">DataAwsOpensearchDomainCognitoOptionsList</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.created"></a>

```go
func Created() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.deleted"></a>

```go
func Deleted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `EbsOptions`<sup>Required</sup> <a name="EbsOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.ebsOptions"></a>

```go
func EbsOptions() DataAwsOpensearchDomainEbsOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList">DataAwsOpensearchDomainEbsOptionsList</a>

---

##### `EncryptionAtRest`<sup>Required</sup> <a name="EncryptionAtRest" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.encryptionAtRest"></a>

```go
func EncryptionAtRest() DataAwsOpensearchDomainEncryptionAtRestList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList">DataAwsOpensearchDomainEncryptionAtRestList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `KibanaEndpoint`<sup>Required</sup> <a name="KibanaEndpoint" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.kibanaEndpoint"></a>

```go
func KibanaEndpoint() *string
```

- *Type:* *string

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.logPublishingOptions"></a>

```go
func LogPublishingOptions() DataAwsOpensearchDomainLogPublishingOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList">DataAwsOpensearchDomainLogPublishingOptionsList</a>

---

##### `NodeToNodeEncryption`<sup>Required</sup> <a name="NodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.nodeToNodeEncryption"></a>

```go
func NodeToNodeEncryption() DataAwsOpensearchDomainNodeToNodeEncryptionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList">DataAwsOpensearchDomainNodeToNodeEncryptionList</a>

---

##### `Processing`<sup>Required</sup> <a name="Processing" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.processing"></a>

```go
func Processing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SnapshotOptions`<sup>Required</sup> <a name="SnapshotOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.snapshotOptions"></a>

```go
func SnapshotOptions() DataAwsOpensearchDomainSnapshotOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList">DataAwsOpensearchDomainSnapshotOptionsList</a>

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.vpcOptions"></a>

```go
func VpcOptions() DataAwsOpensearchDomainVpcOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList">DataAwsOpensearchDomainVpcOptionsList</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchDomainAdvancedSecurityOptions <a name="DataAwsOpensearchDomainAdvancedSecurityOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainAdvancedSecurityOptions {

}
```


### DataAwsOpensearchDomainAutoTuneOptions <a name="DataAwsOpensearchDomainAutoTuneOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainAutoTuneOptions {

}
```


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule {

}
```


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration {

}
```


### DataAwsOpensearchDomainClusterConfig <a name="DataAwsOpensearchDomainClusterConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainClusterConfig {

}
```


### DataAwsOpensearchDomainClusterConfigColdStorageOptions <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions {

}
```


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig {

}
```


### DataAwsOpensearchDomainCognitoOptions <a name="DataAwsOpensearchDomainCognitoOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainCognitoOptions {

}
```


### DataAwsOpensearchDomainConfig <a name="DataAwsOpensearchDomainConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DomainName: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#id DataAwsOpensearchDomain#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#tags DataAwsOpensearchDomain#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#domain_name DataAwsOpensearchDomain#domain_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#id DataAwsOpensearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/opensearch_domain#tags DataAwsOpensearchDomain#tags}.

---

### DataAwsOpensearchDomainEbsOptions <a name="DataAwsOpensearchDomainEbsOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainEbsOptions {

}
```


### DataAwsOpensearchDomainEncryptionAtRest <a name="DataAwsOpensearchDomainEncryptionAtRest" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainEncryptionAtRest {

}
```


### DataAwsOpensearchDomainLogPublishingOptions <a name="DataAwsOpensearchDomainLogPublishingOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainLogPublishingOptions {

}
```


### DataAwsOpensearchDomainNodeToNodeEncryption <a name="DataAwsOpensearchDomainNodeToNodeEncryption" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainNodeToNodeEncryption {

}
```


### DataAwsOpensearchDomainSnapshotOptions <a name="DataAwsOpensearchDomainSnapshotOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainSnapshotOptions {

}
```


### DataAwsOpensearchDomainVpcOptions <a name="DataAwsOpensearchDomainVpcOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

&dataawsopensearchdomain.DataAwsOpensearchDomainVpcOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchDomainAdvancedSecurityOptionsList <a name="DataAwsOpensearchDomainAdvancedSecurityOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAdvancedSecurityOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainAdvancedSecurityOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">InternalUserDatabaseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions">DataAwsOpensearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalUserDatabaseEnabled`<sup>Required</sup> <a name="InternalUserDatabaseEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```go
func InternalUserDatabaseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainAdvancedSecurityOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAdvancedSecurityOptions">DataAwsOpensearchDomainAdvancedSecurityOptions</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsList <a name="DataAwsOpensearchDomainAutoTuneOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainAutoTuneOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainAutoTuneOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">CronExpressionForRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">Duration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">StartAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronExpressionForRecurrence`<sup>Required</sup> <a name="CronExpressionForRecurrence" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```go
func CronExpressionForRecurrence() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```go
func Duration() DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a>

---

##### `StartAt`<sup>Required</sup> <a name="StartAt" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```go
func StartAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceSchedule</a>

---


### DataAwsOpensearchDomainAutoTuneOptionsOutputReference <a name="DataAwsOpensearchDomainAutoTuneOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainAutoTuneOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainAutoTuneOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">RollbackOnDisable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions">DataAwsOpensearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```go
func MaintenanceSchedule() DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsOpensearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `RollbackOnDisable`<sup>Required</sup> <a name="RollbackOnDisable" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```go
func RollbackOnDisable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainAutoTuneOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainAutoTuneOptions">DataAwsOpensearchDomainAutoTuneOptions</a>

---


### DataAwsOpensearchDomainClusterConfigColdStorageOptionsList <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigColdStorageOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainClusterConfigColdStorageOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference <a name="DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions">DataAwsOpensearchDomainClusterConfigColdStorageOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainClusterConfigColdStorageOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptions">DataAwsOpensearchDomainClusterConfigColdStorageOptions</a>

---


### DataAwsOpensearchDomainClusterConfigList <a name="DataAwsOpensearchDomainClusterConfigList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainClusterConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainClusterConfigOutputReference <a name="DataAwsOpensearchDomainClusterConfigOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainClusterConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.coldStorageOptions">ColdStorageOptions</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList">DataAwsOpensearchDomainClusterConfigColdStorageOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">DedicatedMasterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">DedicatedMasterEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType">DedicatedMasterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmCount">WarmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmEnabled">WarmEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmType">WarmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">ZoneAwarenessConfig</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">ZoneAwarenessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig">DataAwsOpensearchDomainClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageOptions`<sup>Required</sup> <a name="ColdStorageOptions" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.coldStorageOptions"></a>

```go
func ColdStorageOptions() DataAwsOpensearchDomainClusterConfigColdStorageOptionsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigColdStorageOptionsList">DataAwsOpensearchDomainClusterConfigColdStorageOptionsList</a>

---

##### `DedicatedMasterCount`<sup>Required</sup> <a name="DedicatedMasterCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```go
func DedicatedMasterCount() *f64
```

- *Type:* *f64

---

##### `DedicatedMasterEnabled`<sup>Required</sup> <a name="DedicatedMasterEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```go
func DedicatedMasterEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DedicatedMasterType`<sup>Required</sup> <a name="DedicatedMasterType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```go
func DedicatedMasterType() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `WarmCount`<sup>Required</sup> <a name="WarmCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmCount"></a>

```go
func WarmCount() *f64
```

- *Type:* *f64

---

##### `WarmEnabled`<sup>Required</sup> <a name="WarmEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```go
func WarmEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WarmType`<sup>Required</sup> <a name="WarmType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.warmType"></a>

```go
func WarmType() *string
```

- *Type:* *string

---

##### `ZoneAwarenessConfig`<sup>Required</sup> <a name="ZoneAwarenessConfig" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```go
func ZoneAwarenessConfig() DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList</a>

---

##### `ZoneAwarenessEnabled`<sup>Required</sup> <a name="ZoneAwarenessEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```go
func ZoneAwarenessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainClusterConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfig">DataAwsOpensearchDomainClusterConfig</a>

---


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">AvailabilityZoneCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneCount`<sup>Required</sup> <a name="AvailabilityZoneCount" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```go
func AvailabilityZoneCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig">DataAwsOpensearchDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsOpensearchDomainCognitoOptionsList <a name="DataAwsOpensearchDomainCognitoOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainCognitoOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainCognitoOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainCognitoOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainCognitoOptionsOutputReference <a name="DataAwsOpensearchDomainCognitoOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainCognitoOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainCognitoOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.userPoolId">UserPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions">DataAwsOpensearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `UserPoolId`<sup>Required</sup> <a name="UserPoolId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```go
func UserPoolId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainCognitoOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainCognitoOptions">DataAwsOpensearchDomainCognitoOptions</a>

---


### DataAwsOpensearchDomainEbsOptionsList <a name="DataAwsOpensearchDomainEbsOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainEbsOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainEbsOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainEbsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainEbsOptionsOutputReference <a name="DataAwsOpensearchDomainEbsOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainEbsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainEbsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.ebsEnabled">EbsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.iops">Iops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.throughput">Throughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeType">VolumeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions">DataAwsOpensearchDomainEbsOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EbsEnabled`<sup>Required</sup> <a name="EbsEnabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```go
func EbsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.iops"></a>

```go
func Iops() *f64
```

- *Type:* *f64

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.throughput"></a>

```go
func Throughput() *f64
```

- *Type:* *f64

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```go
func VolumeSize() *f64
```

- *Type:* *f64

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```go
func VolumeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainEbsOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEbsOptions">DataAwsOpensearchDomainEbsOptions</a>

---


### DataAwsOpensearchDomainEncryptionAtRestList <a name="DataAwsOpensearchDomainEncryptionAtRestList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainEncryptionAtRestList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainEncryptionAtRestList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainEncryptionAtRestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainEncryptionAtRestOutputReference <a name="DataAwsOpensearchDomainEncryptionAtRestOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainEncryptionAtRestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainEncryptionAtRestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest">DataAwsOpensearchDomainEncryptionAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainEncryptionAtRest
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainEncryptionAtRest">DataAwsOpensearchDomainEncryptionAtRest</a>

---


### DataAwsOpensearchDomainLogPublishingOptionsList <a name="DataAwsOpensearchDomainLogPublishingOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainLogPublishingOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainLogPublishingOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainLogPublishingOptionsOutputReference <a name="DataAwsOpensearchDomainLogPublishingOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainLogPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainLogPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions">DataAwsOpensearchDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```go
func CloudwatchLogGroupArn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainLogPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainLogPublishingOptions">DataAwsOpensearchDomainLogPublishingOptions</a>

---


### DataAwsOpensearchDomainNodeToNodeEncryptionList <a name="DataAwsOpensearchDomainNodeToNodeEncryptionList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainNodeToNodeEncryptionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainNodeToNodeEncryptionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference <a name="DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainNodeToNodeEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption">DataAwsOpensearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainNodeToNodeEncryption
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainNodeToNodeEncryption">DataAwsOpensearchDomainNodeToNodeEncryption</a>

---


### DataAwsOpensearchDomainSnapshotOptionsList <a name="DataAwsOpensearchDomainSnapshotOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainSnapshotOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainSnapshotOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainSnapshotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainSnapshotOptionsOutputReference <a name="DataAwsOpensearchDomainSnapshotOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainSnapshotOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainSnapshotOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">AutomatedSnapshotStartHour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions">DataAwsOpensearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomatedSnapshotStartHour`<sup>Required</sup> <a name="AutomatedSnapshotStartHour" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```go
func AutomatedSnapshotStartHour() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainSnapshotOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainSnapshotOptions">DataAwsOpensearchDomainSnapshotOptions</a>

---


### DataAwsOpensearchDomainVpcOptionsList <a name="DataAwsOpensearchDomainVpcOptionsList" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainVpcOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsOpensearchDomainVpcOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get"></a>

```go
func Get(index *f64) DataAwsOpensearchDomainVpcOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsOpensearchDomainVpcOptionsOutputReference <a name="DataAwsOpensearchDomainVpcOptionsOutputReference" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/dataawsopensearchdomain"

dataawsopensearchdomain.NewDataAwsOpensearchDomainVpcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsOpensearchDomainVpcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.availabilityZones">AvailabilityZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions">DataAwsOpensearchDomainVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```go
func AvailabilityZones() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsOpensearchDomainVpcOptions
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOpensearchDomain.DataAwsOpensearchDomainVpcOptions">DataAwsOpensearchDomainVpcOptions</a>

---



