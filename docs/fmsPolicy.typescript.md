# `fmsPolicy` Submodule <a name="`fmsPolicy` Submodule" id="@cdktf/provider-aws.fmsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FmsPolicy <a name="FmsPolicy" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/fms_policy aws_fms_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

new fmsPolicy.FmsPolicy(scope: Construct, id: string, config: FmsPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig">FmsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap">putExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap">putIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData">putSecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources">resetDeleteAllPolicyResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources">resetDeleteUnusedFmManagedResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap">resetExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap">resetIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled">resetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags">resetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList">resetResourceTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExcludeMap` <a name="putExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap"></a>

```typescript
public putExcludeMap(value: FmsPolicyExcludeMap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putExcludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `putIncludeMap` <a name="putIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap"></a>

```typescript
public putIncludeMap(value: FmsPolicyIncludeMap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putIncludeMap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `putSecurityServicePolicyData` <a name="putSecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData"></a>

```typescript
public putSecurityServicePolicyData(value: FmsPolicySecurityServicePolicyData): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.putSecurityServicePolicyData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `resetDeleteAllPolicyResources` <a name="resetDeleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteAllPolicyResources"></a>

```typescript
public resetDeleteAllPolicyResources(): void
```

##### `resetDeleteUnusedFmManagedResources` <a name="resetDeleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetDeleteUnusedFmManagedResources"></a>

```typescript
public resetDeleteUnusedFmManagedResources(): void
```

##### `resetExcludeMap` <a name="resetExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetExcludeMap"></a>

```typescript
public resetExcludeMap(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeMap` <a name="resetIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetIncludeMap"></a>

```typescript
public resetIncludeMap(): void
```

##### `resetRemediationEnabled` <a name="resetRemediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetRemediationEnabled"></a>

```typescript
public resetRemediationEnabled(): void
```

##### `resetResourceTags` <a name="resetResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTags"></a>

```typescript
public resetResourceTags(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetResourceTypeList` <a name="resetResourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetResourceTypeList"></a>

```typescript
public resetResourceTypeList(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isConstruct"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

fmsPolicy.FmsPolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

fmsPolicy.FmsPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

fmsPolicy.FmsPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap">excludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap">includeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken">policyUpdateToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData">securityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput">deleteAllPolicyResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput">deleteUnusedFmManagedResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput">excludeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput">excludeResourceTagsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput">includeMapInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput">remediationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput">resourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput">resourceTypeListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput">securityServicePolicyDataInput</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources">deleteAllPolicyResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources">deleteUnusedFmManagedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags">excludeResourceTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled">remediationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList">resourceTypeList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `excludeMap`<sup>Required</sup> <a name="excludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMap"></a>

```typescript
public readonly excludeMap: FmsPolicyExcludeMapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference">FmsPolicyExcludeMapOutputReference</a>

---

##### `includeMap`<sup>Required</sup> <a name="includeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMap"></a>

```typescript
public readonly includeMap: FmsPolicyIncludeMapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference">FmsPolicyIncludeMapOutputReference</a>

---

##### `policyUpdateToken`<sup>Required</sup> <a name="policyUpdateToken" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.policyUpdateToken"></a>

```typescript
public readonly policyUpdateToken: string;
```

- *Type:* string

---

##### `securityServicePolicyData`<sup>Required</sup> <a name="securityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyData"></a>

```typescript
public readonly securityServicePolicyData: FmsPolicySecurityServicePolicyDataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference">FmsPolicySecurityServicePolicyDataOutputReference</a>

---

##### `deleteAllPolicyResourcesInput`<sup>Optional</sup> <a name="deleteAllPolicyResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResourcesInput"></a>

```typescript
public readonly deleteAllPolicyResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteUnusedFmManagedResourcesInput`<sup>Optional</sup> <a name="deleteUnusedFmManagedResourcesInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResourcesInput"></a>

```typescript
public readonly deleteUnusedFmManagedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeMapInput`<sup>Optional</sup> <a name="excludeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeMapInput"></a>

```typescript
public readonly excludeMapInput: FmsPolicyExcludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---

##### `excludeResourceTagsInput`<sup>Optional</sup> <a name="excludeResourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTagsInput"></a>

```typescript
public readonly excludeResourceTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeMapInput`<sup>Optional</sup> <a name="includeMapInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.includeMapInput"></a>

```typescript
public readonly includeMapInput: FmsPolicyIncludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `remediationEnabledInput`<sup>Optional</sup> <a name="remediationEnabledInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabledInput"></a>

```typescript
public readonly remediationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTagsInput`<sup>Optional</sup> <a name="resourceTagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTagsInput"></a>

```typescript
public readonly resourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `resourceTypeListInput`<sup>Optional</sup> <a name="resourceTypeListInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeListInput"></a>

```typescript
public readonly resourceTypeListInput: string[];
```

- *Type:* string[]

---

##### `securityServicePolicyDataInput`<sup>Optional</sup> <a name="securityServicePolicyDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.securityServicePolicyDataInput"></a>

```typescript
public readonly securityServicePolicyDataInput: FmsPolicySecurityServicePolicyData;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deleteAllPolicyResources`<sup>Required</sup> <a name="deleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteAllPolicyResources"></a>

```typescript
public readonly deleteAllPolicyResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deleteUnusedFmManagedResources`<sup>Required</sup> <a name="deleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.deleteUnusedFmManagedResources"></a>

```typescript
public readonly deleteUnusedFmManagedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludeResourceTags`<sup>Required</sup> <a name="excludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.excludeResourceTags"></a>

```typescript
public readonly excludeResourceTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remediationEnabled`<sup>Required</sup> <a name="remediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.remediationEnabled"></a>

```typescript
public readonly remediationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `resourceTypeList`<sup>Required</sup> <a name="resourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.resourceTypeList"></a>

```typescript
public readonly resourceTypeList: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FmsPolicyConfig <a name="FmsPolicyConfig" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

const fmsPolicyConfig: fmsPolicy.FmsPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags">excludeResourceTags</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData">securityServicePolicyData</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | security_service_policy_data block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources">deleteAllPolicyResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources">deleteUnusedFmManagedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap">excludeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | exclude_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap">includeMap</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | include_map block. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled">remediationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags">resourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList">resourceTypeList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `excludeResourceTags`<sup>Required</sup> <a name="excludeResourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeResourceTags"></a>

```typescript
public readonly excludeResourceTags: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#name FmsPolicy#name}.

---

##### `securityServicePolicyData`<sup>Required</sup> <a name="securityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.securityServicePolicyData"></a>

```typescript
public readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

security_service_policy_data block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}

---

##### `deleteAllPolicyResources`<sup>Optional</sup> <a name="deleteAllPolicyResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteAllPolicyResources"></a>

```typescript
public readonly deleteAllPolicyResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}.

---

##### `deleteUnusedFmManagedResources`<sup>Optional</sup> <a name="deleteUnusedFmManagedResources" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.deleteUnusedFmManagedResources"></a>

```typescript
public readonly deleteUnusedFmManagedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}.

---

##### `excludeMap`<sup>Optional</sup> <a name="excludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.excludeMap"></a>

```typescript
public readonly excludeMap: FmsPolicyExcludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

exclude_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#exclude_map FmsPolicy#exclude_map}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#id FmsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeMap`<sup>Optional</sup> <a name="includeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.includeMap"></a>

```typescript
public readonly includeMap: FmsPolicyIncludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

include_map block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#include_map FmsPolicy#include_map}

---

##### `remediationEnabled`<sup>Optional</sup> <a name="remediationEnabled" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.remediationEnabled"></a>

```typescript
public readonly remediationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}.

---

##### `resourceTags`<sup>Optional</sup> <a name="resourceTags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTags"></a>

```typescript
public readonly resourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_tags FmsPolicy#resource_tags}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type FmsPolicy#resource_type}.

---

##### `resourceTypeList`<sup>Optional</sup> <a name="resourceTypeList" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.resourceTypeList"></a>

```typescript
public readonly resourceTypeList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#resource_type_list FmsPolicy#resource_type_list}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags FmsPolicy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#tags_all FmsPolicy#tags_all}.

---

### FmsPolicyExcludeMap <a name="FmsPolicyExcludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

const fmsPolicyExcludeMap: fmsPolicy.FmsPolicyExcludeMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account">account</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit">orgunit</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.account"></a>

```typescript
public readonly account: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap.property.orgunit"></a>

```typescript
public readonly orgunit: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicyIncludeMap <a name="FmsPolicyIncludeMap" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

const fmsPolicyIncludeMap: fmsPolicy.FmsPolicyIncludeMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account">account</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit">orgunit</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.account"></a>

```typescript
public readonly account: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#account FmsPolicy#account}.

---

##### `orgunit`<sup>Optional</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap.property.orgunit"></a>

```typescript
public readonly orgunit: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#orgunit FmsPolicy#orgunit}.

---

### FmsPolicySecurityServicePolicyData <a name="FmsPolicySecurityServicePolicyData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

const fmsPolicySecurityServicePolicyData: fmsPolicy.FmsPolicySecurityServicePolicyData = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData">managedServiceData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#type FmsPolicy#type}.

---

##### `managedServiceData`<sup>Optional</sup> <a name="managedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData.property.managedServiceData"></a>

```typescript
public readonly managedServiceData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fms_policy#managed_service_data FmsPolicy#managed_service_data}.

---

## Classes <a name="Classes" id="Classes"></a>

### FmsPolicyExcludeMapOutputReference <a name="FmsPolicyExcludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

new fmsPolicy.FmsPolicyExcludeMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit">resetOrgunit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetOrgunit` <a name="resetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.resetOrgunit"></a>

```typescript
public resetOrgunit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput">accountInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput">orgunitInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account">account</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string[];
```

- *Type:* string[]

---

##### `orgunitInput`<sup>Optional</sup> <a name="orgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunitInput"></a>

```typescript
public readonly orgunitInput: string[];
```

- *Type:* string[]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.account"></a>

```typescript
public readonly account: string[];
```

- *Type:* string[]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.orgunit"></a>

```typescript
public readonly orgunit: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FmsPolicyExcludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyExcludeMap">FmsPolicyExcludeMap</a>

---


### FmsPolicyIncludeMapOutputReference <a name="FmsPolicyIncludeMapOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

new fmsPolicy.FmsPolicyIncludeMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit">resetOrgunit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetOrgunit` <a name="resetOrgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.resetOrgunit"></a>

```typescript
public resetOrgunit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput">accountInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput">orgunitInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account">account</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit">orgunit</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.accountInput"></a>

```typescript
public readonly accountInput: string[];
```

- *Type:* string[]

---

##### `orgunitInput`<sup>Optional</sup> <a name="orgunitInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunitInput"></a>

```typescript
public readonly orgunitInput: string[];
```

- *Type:* string[]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.account"></a>

```typescript
public readonly account: string[];
```

- *Type:* string[]

---

##### `orgunit`<sup>Required</sup> <a name="orgunit" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.orgunit"></a>

```typescript
public readonly orgunit: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FmsPolicyIncludeMap;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicyIncludeMap">FmsPolicyIncludeMap</a>

---


### FmsPolicySecurityServicePolicyDataOutputReference <a name="FmsPolicySecurityServicePolicyDataOutputReference" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer"></a>

```typescript
import { fmsPolicy } from '@cdktf/provider-aws'

new fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData">resetManagedServiceData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManagedServiceData` <a name="resetManagedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.resetManagedServiceData"></a>

```typescript
public resetManagedServiceData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput">managedServiceDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData">managedServiceData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedServiceDataInput`<sup>Optional</sup> <a name="managedServiceDataInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceDataInput"></a>

```typescript
public readonly managedServiceDataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `managedServiceData`<sup>Required</sup> <a name="managedServiceData" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.managedServiceData"></a>

```typescript
public readonly managedServiceData: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FmsPolicySecurityServicePolicyData;
```

- *Type:* <a href="#@cdktf/provider-aws.fmsPolicy.FmsPolicySecurityServicePolicyData">FmsPolicySecurityServicePolicyData</a>

---



