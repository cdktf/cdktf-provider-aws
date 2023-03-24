# `fmsPolicy` Submodule <a name="`fmsPolicy` Submodule" id="@cdktf/provider-aws.fmsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsPolicy <a name="FmsPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy aws_fms_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.NewFmsPolicy(scope Construct, id *string, config FmsPolicyConfig) FmsPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap">PutExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap">PutIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData">PutSecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources">ResetDeleteAllPolicyResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources">ResetDeleteUnusedFmManagedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap">ResetExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap">ResetIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled">ResetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList">ResetResourceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutExcludeMap` <a name="PutExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap"></a>

```go
func PutExcludeMap(value FmsPolicyExcludeMap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `PutIncludeMap` <a name="PutIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap"></a>

```go
func PutIncludeMap(value FmsPolicyIncludeMap)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `PutSecurityServicePolicyData` <a name="PutSecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData"></a>

```go
func PutSecurityServicePolicyData(value FmsPolicySecurityServicePolicyData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `ResetDeleteAllPolicyResources` <a name="ResetDeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources"></a>

```go
func ResetDeleteAllPolicyResources()
```

##### `ResetDeleteUnusedFmManagedResources` <a name="ResetDeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources"></a>

```go
func ResetDeleteUnusedFmManagedResources()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExcludeMap` <a name="ResetExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap"></a>

```go
func ResetExcludeMap()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeMap` <a name="ResetIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap"></a>

```go
func ResetIncludeMap()
```

##### `ResetRemediationEnabled` <a name="ResetRemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled"></a>

```go
func ResetRemediationEnabled()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags"></a>

```go
func ResetResourceTags()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetResourceTypeList` <a name="ResetResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList"></a>

```go
func ResetResourceTypeList()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.FmsPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.FmsPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.FmsPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap">ExcludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap">IncludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken">PolicyUpdateToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData">SecurityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput">DeleteAllPolicyResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput">DeleteUnusedFmManagedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput">ExcludeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput">ExcludeResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput">IncludeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput">RemediationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput">ResourceTypeListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput">SecurityServicePolicyDataInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources">DeleteAllPolicyResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources">DeleteUnusedFmManagedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags">ExcludeResourceTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled">RemediationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags">ResourceTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList">ResourceTypeList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ExcludeMap`<sup>Required</sup> <a name="ExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap"></a>

```go
func ExcludeMap() FmsPolicyExcludeMapOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a>

---

##### `IncludeMap`<sup>Required</sup> <a name="IncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap"></a>

```go
func IncludeMap() FmsPolicyIncludeMapOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a>

---

##### `PolicyUpdateToken`<sup>Required</sup> <a name="PolicyUpdateToken" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken"></a>

```go
func PolicyUpdateToken() *string
```

- *Type:* *string

---

##### `SecurityServicePolicyData`<sup>Required</sup> <a name="SecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData"></a>

```go
func SecurityServicePolicyData() FmsPolicySecurityServicePolicyDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a>

---

##### `DeleteAllPolicyResourcesInput`<sup>Optional</sup> <a name="DeleteAllPolicyResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput"></a>

```go
func DeleteAllPolicyResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteUnusedFmManagedResourcesInput`<sup>Optional</sup> <a name="DeleteUnusedFmManagedResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput"></a>

```go
func DeleteUnusedFmManagedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExcludeMapInput`<sup>Optional</sup> <a name="ExcludeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput"></a>

```go
func ExcludeMapInput() FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `ExcludeResourceTagsInput`<sup>Optional</sup> <a name="ExcludeResourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput"></a>

```go
func ExcludeResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeMapInput`<sup>Optional</sup> <a name="IncludeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput"></a>

```go
func IncludeMapInput() FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemediationEnabledInput`<sup>Optional</sup> <a name="RemediationEnabledInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput"></a>

```go
func RemediationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceTypeListInput`<sup>Optional</sup> <a name="ResourceTypeListInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput"></a>

```go
func ResourceTypeListInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityServicePolicyDataInput`<sup>Optional</sup> <a name="SecurityServicePolicyDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput"></a>

```go
func SecurityServicePolicyDataInput() FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeleteAllPolicyResources`<sup>Required</sup> <a name="DeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources"></a>

```go
func DeleteAllPolicyResources() interface{}
```

- *Type:* interface{}

---

##### `DeleteUnusedFmManagedResources`<sup>Required</sup> <a name="DeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources"></a>

```go
func DeleteUnusedFmManagedResources() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludeResourceTags`<sup>Required</sup> <a name="ExcludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags"></a>

```go
func ExcludeResourceTags() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled"></a>

```go
func RemediationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags"></a>

```go
func ResourceTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResourceTypeList`<sup>Required</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList"></a>

```go
func ResourceTypeList() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FmsPolicyConfig <a name="FmsPolicyConfig" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

&fmspolicy.FmsPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExcludeResourceTags: interface{},
	Name: *string,
	SecurityServicePolicyData: github.com/cdktf/cdktf-provider-aws-go/aws.fmsPolicy.FmsPolicySecurityServicePolicyData,
	DeleteAllPolicyResources: interface{},
	DeleteUnusedFmManagedResources: interface{},
	Description: *string,
	ExcludeMap: github.com/cdktf/cdktf-provider-aws-go/aws.fmsPolicy.FmsPolicyExcludeMap,
	Id: *string,
	IncludeMap: github.com/cdktf/cdktf-provider-aws-go/aws.fmsPolicy.FmsPolicyIncludeMap,
	RemediationEnabled: interface{},
	ResourceTags: *map[string]*string,
	ResourceType: *string,
	ResourceTypeList: *[]*string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags">ExcludeResourceTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData">SecurityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | security_service_policy_data block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources">DeleteAllPolicyResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources">DeleteUnusedFmManagedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#description FmsPolicy#description}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap">ExcludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | exclude_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap">IncludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | include_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled">RemediationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags">ResourceTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList">ResourceTypeList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExcludeResourceTags`<sup>Required</sup> <a name="ExcludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags"></a>

```go
ExcludeResourceTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}.

---

##### `SecurityServicePolicyData`<sup>Required</sup> <a name="SecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData"></a>

```go
SecurityServicePolicyData FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

security_service_policy_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `DeleteAllPolicyResources`<sup>Optional</sup> <a name="DeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources"></a>

```go
DeleteAllPolicyResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `DeleteUnusedFmManagedResources`<sup>Optional</sup> <a name="DeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources"></a>

```go
DeleteUnusedFmManagedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#description FmsPolicy#description}.

---

##### `ExcludeMap`<sup>Optional</sup> <a name="ExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap"></a>

```go
ExcludeMap FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

exclude_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeMap`<sup>Optional</sup> <a name="IncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap"></a>

```go
IncludeMap FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

include_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#include_map FmsPolicy#include_map}

---

##### `RemediationEnabled`<sup>Optional</sup> <a name="RemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled"></a>

```go
RemediationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags"></a>

```go
ResourceTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}.

---

##### `ResourceTypeList`<sup>Optional</sup> <a name="ResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList"></a>

```go
ResourceTypeList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}.

---

### FmsPolicyExcludeMap <a name="FmsPolicyExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

&fmspolicy.FmsPolicyExcludeMap {
	Account: *[]*string,
	Orgunit: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account">Account</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit">Orgunit</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account"></a>

```go
Account *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `Orgunit`<sup>Optional</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit"></a>

```go
Orgunit *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyIncludeMap <a name="FmsPolicyIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

&fmspolicy.FmsPolicyIncludeMap {
	Account: *[]*string,
	Orgunit: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account">Account</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit">Orgunit</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account"></a>

```go
Account *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `Orgunit`<sup>Optional</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit"></a>

```go
Orgunit *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicySecurityServicePolicyData <a name="FmsPolicySecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

&fmspolicy.FmsPolicySecurityServicePolicyData {
	Type: *string,
	ManagedServiceData: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData">ManagedServiceData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}.

---

##### `ManagedServiceData`<sup>Optional</sup> <a name="ManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData"></a>

```go
ManagedServiceData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### FmsPolicyExcludeMapOutputReference <a name="FmsPolicyExcludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.NewFmsPolicyExcludeMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FmsPolicyExcludeMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit">ResetOrgunit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetOrgunit` <a name="ResetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit"></a>

```go
func ResetOrgunit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput">AccountInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput">OrgunitInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account">Account</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit">Orgunit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput"></a>

```go
func AccountInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrgunitInput`<sup>Optional</sup> <a name="OrgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput"></a>

```go
func OrgunitInput() *[]*string
```

- *Type:* *[]*string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account"></a>

```go
func Account() *[]*string
```

- *Type:* *[]*string

---

##### `Orgunit`<sup>Required</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit"></a>

```go
func Orgunit() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue"></a>

```go
func InternalValue() FmsPolicyExcludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---


### FmsPolicyIncludeMapOutputReference <a name="FmsPolicyIncludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.NewFmsPolicyIncludeMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FmsPolicyIncludeMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit">ResetOrgunit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetOrgunit` <a name="ResetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit"></a>

```go
func ResetOrgunit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput">AccountInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput">OrgunitInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account">Account</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit">Orgunit</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput"></a>

```go
func AccountInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrgunitInput`<sup>Optional</sup> <a name="OrgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput"></a>

```go
func OrgunitInput() *[]*string
```

- *Type:* *[]*string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account"></a>

```go
func Account() *[]*string
```

- *Type:* *[]*string

---

##### `Orgunit`<sup>Required</sup> <a name="Orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit"></a>

```go
func Orgunit() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue"></a>

```go
func InternalValue() FmsPolicyIncludeMap
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---


### FmsPolicySecurityServicePolicyDataOutputReference <a name="FmsPolicySecurityServicePolicyDataOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/fmspolicy"

fmspolicy.NewFmsPolicySecurityServicePolicyDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FmsPolicySecurityServicePolicyDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData">ResetManagedServiceData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedServiceData` <a name="ResetManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData"></a>

```go
func ResetManagedServiceData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput">ManagedServiceDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData">ManagedServiceData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedServiceDataInput`<sup>Optional</sup> <a name="ManagedServiceDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput"></a>

```go
func ManagedServiceDataInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ManagedServiceData`<sup>Required</sup> <a name="ManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData"></a>

```go
func ManagedServiceData() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue"></a>

```go
func InternalValue() FmsPolicySecurityServicePolicyData
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---



