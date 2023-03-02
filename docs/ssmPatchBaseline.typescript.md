# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktf/provider-aws.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline aws_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaseline(scope: Construct, id: string, config: SsmPatchBaselineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule">putApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter">putGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule">resetApprovalRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">resetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">resetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">resetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter">resetGlobalFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">resetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">resetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApprovalRule` <a name="putApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule"></a>

```typescript
public putApprovalRule(value: IResolvable | SsmPatchBaselineApprovalRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putApprovalRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]

---

##### `putGlobalFilter` <a name="putGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter"></a>

```typescript
public putGlobalFilter(value: IResolvable | SsmPatchBaselineGlobalFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]

---

##### `putSource` <a name="putSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource"></a>

```typescript
public putSource(value: IResolvable | SsmPatchBaselineSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.putSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]

---

##### `resetApprovalRule` <a name="resetApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRule"></a>

```typescript
public resetApprovalRule(): void
```

##### `resetApprovedPatches` <a name="resetApprovedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```typescript
public resetApprovedPatches(): void
```

##### `resetApprovedPatchesComplianceLevel` <a name="resetApprovedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```typescript
public resetApprovedPatchesComplianceLevel(): void
```

##### `resetApprovedPatchesEnableNonSecurity` <a name="resetApprovedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```typescript
public resetApprovedPatchesEnableNonSecurity(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlobalFilter` <a name="resetGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilter"></a>

```typescript
public resetGlobalFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetRejectedPatches` <a name="resetRejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```typescript
public resetRejectedPatches(): void
```

##### `resetRejectedPatchesAction` <a name="resetRejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```typescript
public resetRejectedPatchesAction(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

ssmPatchBaseline.SsmPatchBaseline.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

ssmPatchBaseline.SsmPatchBaseline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

ssmPatchBaseline.SsmPatchBaseline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule">approvalRule</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter">globalFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source">source</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput">approvalRuleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">approvedPatchesComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">approvedPatchesEnableNonSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">approvedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput">globalFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">rejectedPatchesActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">rejectedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput">sourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">approvedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">rejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approvalRule`<sup>Required</sup> <a name="approvalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRule"></a>

```typescript
public readonly approvalRule: SsmPatchBaselineApprovalRuleList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList">SsmPatchBaselineApprovalRuleList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `globalFilter`<sup>Required</sup> <a name="globalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilter"></a>

```typescript
public readonly globalFilter: SsmPatchBaselineGlobalFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList">SsmPatchBaselineGlobalFilterList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.source"></a>

```typescript
public readonly source: SsmPatchBaselineSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList">SsmPatchBaselineSourceList</a>

---

##### `approvalRuleInput`<sup>Optional</sup> <a name="approvalRuleInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvalRuleInput"></a>

```typescript
public readonly approvalRuleInput: IResolvable | SsmPatchBaselineApprovalRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]

---

##### `approvedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="approvedPatchesComplianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```typescript
public readonly approvedPatchesComplianceLevelInput: string;
```

- *Type:* string

---

##### `approvedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```typescript
public readonly approvedPatchesEnableNonSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `approvedPatchesInput`<sup>Optional</sup> <a name="approvedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```typescript
public readonly approvedPatchesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalFilterInput`<sup>Optional</sup> <a name="globalFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.globalFilterInput"></a>

```typescript
public readonly globalFilterInput: IResolvable | SsmPatchBaselineGlobalFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `rejectedPatchesActionInput`<sup>Optional</sup> <a name="rejectedPatchesActionInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```typescript
public readonly rejectedPatchesActionInput: string;
```

- *Type:* string

---

##### `rejectedPatchesInput`<sup>Optional</sup> <a name="rejectedPatchesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```typescript
public readonly rejectedPatchesInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | SsmPatchBaselineSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `approvedPatches`<sup>Required</sup> <a name="approvedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```typescript
public readonly approvedPatches: string[];
```

- *Type:* string[]

---

##### `approvedPatchesComplianceLevel`<sup>Required</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```typescript
public readonly approvedPatchesComplianceLevel: string;
```

- *Type:* string

---

##### `approvedPatchesEnableNonSecurity`<sup>Required</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```typescript
public readonly approvedPatchesEnableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `rejectedPatches`<sup>Required</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```typescript
public readonly rejectedPatches: string[];
```

- *Type:* string[]

---

##### `rejectedPatchesAction`<sup>Required</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```typescript
public readonly rejectedPatchesAction: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRule <a name="SsmPatchBaselineApprovalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

const ssmPatchBaselineApprovalRule: ssmPatchBaseline.SsmPatchBaselineApprovalRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter">patchFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]</code> | patch_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays">approveAfterDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate">approveUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel">complianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity">enableNonSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |

---

##### `patchFilter`<sup>Required</sup> <a name="patchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.patchFilter"></a>

```typescript
public readonly patchFilter: IResolvable | SsmPatchBaselineApprovalRulePatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]

patch_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}

---

##### `approveAfterDays`<sup>Optional</sup> <a name="approveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveAfterDays"></a>

```typescript
public readonly approveAfterDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `approveUntilDate`<sup>Optional</sup> <a name="approveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.approveUntilDate"></a>

```typescript
public readonly approveUntilDate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `complianceLevel`<sup>Optional</sup> <a name="complianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.complianceLevel"></a>

```typescript
public readonly complianceLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `enableNonSecurity`<sup>Optional</sup> <a name="enableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule.property.enableNonSecurity"></a>

```typescript
public readonly enableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

### SsmPatchBaselineApprovalRulePatchFilter <a name="SsmPatchBaselineApprovalRulePatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

const ssmPatchBaselineApprovalRulePatchFilter: ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

const ssmPatchBaselineConfig: ssmPatchBaseline.SsmPatchBaselineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule">approvalRule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]</code> | approval_rule block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">approvedPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">approvedPatchesComplianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">approvedPatchesEnableNonSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter">globalFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]</code> | global_filter block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">rejectedPatches</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">rejectedPatchesAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source">source</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]</code> | source block. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `approvalRule`<sup>Optional</sup> <a name="approvalRule" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRule"></a>

```typescript
public readonly approvalRule: IResolvable | SsmPatchBaselineApprovalRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]

approval_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}

---

##### `approvedPatches`<sup>Optional</sup> <a name="approvedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```typescript
public readonly approvedPatches: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}.

---

##### `approvedPatchesComplianceLevel`<sup>Optional</sup> <a name="approvedPatchesComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```typescript
public readonly approvedPatchesComplianceLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}.

---

##### `approvedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="approvedPatchesEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```typescript
public readonly approvedPatchesEnableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#description SsmPatchBaseline#description}.

---

##### `globalFilter`<sup>Optional</sup> <a name="globalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilter"></a>

```typescript
public readonly globalFilter: IResolvable | SsmPatchBaselineGlobalFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]

global_filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#id SsmPatchBaseline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}.

---

##### `rejectedPatches`<sup>Optional</sup> <a name="rejectedPatches" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```typescript
public readonly rejectedPatches: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}.

---

##### `rejectedPatchesAction`<sup>Optional</sup> <a name="rejectedPatchesAction" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```typescript
public readonly rejectedPatchesAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.source"></a>

```typescript
public readonly source: IResolvable | SsmPatchBaselineSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]

source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#source SsmPatchBaseline#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags SsmPatchBaseline#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}.

---

### SsmPatchBaselineGlobalFilter <a name="SsmPatchBaselineGlobalFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

const ssmPatchBaselineGlobalFilter: ssmPatchBaseline.SsmPatchBaselineGlobalFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSource <a name="SsmPatchBaselineSource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

const ssmPatchBaselineSource: ssmPatchBaseline.SsmPatchBaselineSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration">configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products">products</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRuleList <a name="SsmPatchBaselineApprovalRuleList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineApprovalRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineApprovalRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a>[]

---


### SsmPatchBaselineApprovalRuleOutputReference <a name="SsmPatchBaselineApprovalRuleOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter">putPatchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays">resetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate">resetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel">resetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity">resetEnableNonSecurity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPatchFilter` <a name="putPatchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter"></a>

```typescript
public putPatchFilter(value: IResolvable | SsmPatchBaselineApprovalRulePatchFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.putPatchFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]

---

##### `resetApproveAfterDays` <a name="resetApproveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveAfterDays"></a>

```typescript
public resetApproveAfterDays(): void
```

##### `resetApproveUntilDate` <a name="resetApproveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetApproveUntilDate"></a>

```typescript
public resetApproveUntilDate(): void
```

##### `resetComplianceLevel` <a name="resetComplianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetComplianceLevel"></a>

```typescript
public resetComplianceLevel(): void
```

##### `resetEnableNonSecurity` <a name="resetEnableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.resetEnableNonSecurity"></a>

```typescript
public resetEnableNonSecurity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter">patchFilter</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput">approveAfterDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput">approveUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput">complianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput">enableNonSecurityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput">patchFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays">approveAfterDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate">approveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel">complianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity">enableNonSecurity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `patchFilter`<sup>Required</sup> <a name="patchFilter" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilter"></a>

```typescript
public readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList">SsmPatchBaselineApprovalRulePatchFilterList</a>

---

##### `approveAfterDaysInput`<sup>Optional</sup> <a name="approveAfterDaysInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDaysInput"></a>

```typescript
public readonly approveAfterDaysInput: number;
```

- *Type:* number

---

##### `approveUntilDateInput`<sup>Optional</sup> <a name="approveUntilDateInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDateInput"></a>

```typescript
public readonly approveUntilDateInput: string;
```

- *Type:* string

---

##### `complianceLevelInput`<sup>Optional</sup> <a name="complianceLevelInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevelInput"></a>

```typescript
public readonly complianceLevelInput: string;
```

- *Type:* string

---

##### `enableNonSecurityInput`<sup>Optional</sup> <a name="enableNonSecurityInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurityInput"></a>

```typescript
public readonly enableNonSecurityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patchFilterInput`<sup>Optional</sup> <a name="patchFilterInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.patchFilterInput"></a>

```typescript
public readonly patchFilterInput: IResolvable | SsmPatchBaselineApprovalRulePatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]

---

##### `approveAfterDays`<sup>Required</sup> <a name="approveAfterDays" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveAfterDays"></a>

```typescript
public readonly approveAfterDays: number;
```

- *Type:* number

---

##### `approveUntilDate`<sup>Required</sup> <a name="approveUntilDate" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.approveUntilDate"></a>

```typescript
public readonly approveUntilDate: string;
```

- *Type:* string

---

##### `complianceLevel`<sup>Required</sup> <a name="complianceLevel" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.complianceLevel"></a>

```typescript
public readonly complianceLevel: string;
```

- *Type:* string

---

##### `enableNonSecurity`<sup>Required</sup> <a name="enableNonSecurity" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.enableNonSecurity"></a>

```typescript
public readonly enableNonSecurity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmPatchBaselineApprovalRule | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRule">SsmPatchBaselineApprovalRule</a> | cdktf.IResolvable

---


### SsmPatchBaselineApprovalRulePatchFilterList <a name="SsmPatchBaselineApprovalRulePatchFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineApprovalRulePatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineApprovalRulePatchFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a>[]

---


### SsmPatchBaselineApprovalRulePatchFilterOutputReference <a name="SsmPatchBaselineApprovalRulePatchFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmPatchBaselineApprovalRulePatchFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineApprovalRulePatchFilter">SsmPatchBaselineApprovalRulePatchFilter</a> | cdktf.IResolvable

---


### SsmPatchBaselineGlobalFilterList <a name="SsmPatchBaselineGlobalFilterList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineGlobalFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineGlobalFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineGlobalFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a>[]

---


### SsmPatchBaselineGlobalFilterOutputReference <a name="SsmPatchBaselineGlobalFilterOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmPatchBaselineGlobalFilter | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineGlobalFilter">SsmPatchBaselineGlobalFilter</a> | cdktf.IResolvable

---


### SsmPatchBaselineSourceList <a name="SsmPatchBaselineSourceList" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get"></a>

```typescript
public get(index: number): SsmPatchBaselineSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsmPatchBaselineSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a>[]

---


### SsmPatchBaselineSourceOutputReference <a name="SsmPatchBaselineSourceOutputReference" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer"></a>

```typescript
import { ssmPatchBaseline } from '@cdktf/provider-aws'

new ssmPatchBaseline.SsmPatchBaselineSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput">productsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products">products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `productsInput`<sup>Optional</sup> <a name="productsInput" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.productsInput"></a>

```typescript
public readonly productsInput: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `products`<sup>Required</sup> <a name="products" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.products"></a>

```typescript
public readonly products: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SsmPatchBaselineSource | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.ssmPatchBaseline.SsmPatchBaselineSource">SsmPatchBaselineSource</a> | cdktf.IResolvable

---



