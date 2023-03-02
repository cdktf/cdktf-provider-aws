# `vpcIpamPool` Submodule <a name="`vpcIpamPool` Submodule" id="@cdktf/provider-aws.vpcIpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPool <a name="VpcIpamPool" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool aws_vpc_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

new vpcIpamPool.VpcIpamPool(scope: Construct, id: string, config: VpcIpamPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig">VpcIpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength">resetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength">resetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength">resetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags">resetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport">resetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService">resetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource">resetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable">resetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId">resetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcIpamPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

---

##### `resetAllocationDefaultNetmaskLength` <a name="resetAllocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationDefaultNetmaskLength"></a>

```typescript
public resetAllocationDefaultNetmaskLength(): void
```

##### `resetAllocationMaxNetmaskLength` <a name="resetAllocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMaxNetmaskLength"></a>

```typescript
public resetAllocationMaxNetmaskLength(): void
```

##### `resetAllocationMinNetmaskLength` <a name="resetAllocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationMinNetmaskLength"></a>

```typescript
public resetAllocationMinNetmaskLength(): void
```

##### `resetAllocationResourceTags` <a name="resetAllocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAllocationResourceTags"></a>

```typescript
public resetAllocationResourceTags(): void
```

##### `resetAutoImport` <a name="resetAutoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAutoImport"></a>

```typescript
public resetAutoImport(): void
```

##### `resetAwsService` <a name="resetAwsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetAwsService"></a>

```typescript
public resetAwsService(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetPublicIpSource` <a name="resetPublicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPublicIpSource"></a>

```typescript
public resetPublicIpSource(): void
```

##### `resetPubliclyAdvertisable` <a name="resetPubliclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetPubliclyAdvertisable"></a>

```typescript
public resetPubliclyAdvertisable(): void
```

##### `resetSourceIpamPoolId` <a name="resetSourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetSourceIpamPoolId"></a>

```typescript
public resetSourceIpamPoolId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

vpcIpamPool.VpcIpamPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

vpcIpamPool.VpcIpamPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

vpcIpamPool.VpcIpamPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType">ipamScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth">poolDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput">allocationDefaultNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput">allocationMaxNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput">allocationMinNetmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput">allocationResourceTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput">autoImportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput">awsServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput">ipamScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput">publicIpSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput">publiclyAdvertisableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput">sourceIpamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags">allocationResourceTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport">autoImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService">awsService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource">publicIpSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ipamScopeType`<sup>Required</sup> <a name="ipamScopeType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeType"></a>

```typescript
public readonly ipamScopeType: string;
```

- *Type:* string

---

##### `poolDepth`<sup>Required</sup> <a name="poolDepth" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.poolDepth"></a>

```typescript
public readonly poolDepth: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpamPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference">VpcIpamPoolTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="allocationDefaultNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```typescript
public readonly allocationDefaultNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMaxNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLengthInput"></a>

```typescript
public readonly allocationMaxNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="allocationMinNetmaskLengthInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLengthInput"></a>

```typescript
public readonly allocationMinNetmaskLengthInput: number;
```

- *Type:* number

---

##### `allocationResourceTagsInput`<sup>Optional</sup> <a name="allocationResourceTagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTagsInput"></a>

```typescript
public readonly allocationResourceTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoImportInput`<sup>Optional</sup> <a name="autoImportInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImportInput"></a>

```typescript
public readonly autoImportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsServiceInput`<sup>Optional</sup> <a name="awsServiceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsServiceInput"></a>

```typescript
public readonly awsServiceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamScopeIdInput`<sup>Optional</sup> <a name="ipamScopeIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeIdInput"></a>

```typescript
public readonly ipamScopeIdInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `publicIpSourceInput`<sup>Optional</sup> <a name="publicIpSourceInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSourceInput"></a>

```typescript
public readonly publicIpSourceInput: string;
```

- *Type:* string

---

##### `publiclyAdvertisableInput`<sup>Optional</sup> <a name="publiclyAdvertisableInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisableInput"></a>

```typescript
public readonly publiclyAdvertisableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpamPoolIdInput`<sup>Optional</sup> <a name="sourceIpamPoolIdInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolIdInput"></a>

```typescript
public readonly sourceIpamPoolIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: VpcIpamPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> | cdktf.IResolvable

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `allocationDefaultNetmaskLength`<sup>Required</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMaxNetmaskLength`<sup>Required</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

---

##### `allocationMinNetmaskLength`<sup>Required</sup> <a name="allocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

---

##### `allocationResourceTags`<sup>Required</sup> <a name="allocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `autoImport`<sup>Required</sup> <a name="autoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `awsService`<sup>Required</sup> <a name="awsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `publicIpSource`<sup>Required</sup> <a name="publicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publicIpSource"></a>

```typescript
public readonly publicIpSource: string;
```

- *Type:* string

---

##### `publiclyAdvertisable`<sup>Required</sup> <a name="publiclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIpamPoolId`<sup>Required</sup> <a name="sourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolConfig <a name="VpcIpamPoolConfig" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

const vpcIpamPoolConfig: vpcIpamPool.VpcIpamPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength">allocationDefaultNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength">allocationMaxNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength">allocationMinNetmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags">allocationResourceTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport">autoImport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService">awsService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource">publicIpSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable">publiclyAdvertisable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId">sourceIpamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#address_family VpcIpamPool#address_family}.

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}.

---

##### `allocationDefaultNetmaskLength`<sup>Optional</sup> <a name="allocationDefaultNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```typescript
public readonly allocationDefaultNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}.

---

##### `allocationMaxNetmaskLength`<sup>Optional</sup> <a name="allocationMaxNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```typescript
public readonly allocationMaxNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}.

---

##### `allocationMinNetmaskLength`<sup>Optional</sup> <a name="allocationMinNetmaskLength" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationMinNetmaskLength"></a>

```typescript
public readonly allocationMinNetmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}.

---

##### `allocationResourceTags`<sup>Optional</sup> <a name="allocationResourceTags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.allocationResourceTags"></a>

```typescript
public readonly allocationResourceTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}.

---

##### `autoImport`<sup>Optional</sup> <a name="autoImport" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.autoImport"></a>

```typescript
public readonly autoImport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}.

---

##### `awsService`<sup>Optional</sup> <a name="awsService" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.awsService"></a>

```typescript
public readonly awsService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#description VpcIpamPool#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#id VpcIpamPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#locale VpcIpamPool#locale}.

---

##### `publicIpSource`<sup>Optional</sup> <a name="publicIpSource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publicIpSource"></a>

```typescript
public readonly publicIpSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}.

---

##### `publiclyAdvertisable`<sup>Optional</sup> <a name="publiclyAdvertisable" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.publiclyAdvertisable"></a>

```typescript
public readonly publiclyAdvertisable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}.

---

##### `sourceIpamPoolId`<sup>Optional</sup> <a name="sourceIpamPoolId" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.sourceIpamPoolId"></a>

```typescript
public readonly sourceIpamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags VpcIpamPool#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcIpamPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}

---

### VpcIpamPoolTimeouts <a name="VpcIpamPoolTimeouts" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

const vpcIpamPoolTimeouts: vpcIpamPool.VpcIpamPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#create VpcIpamPool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#delete VpcIpamPool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_ipam_pool#update VpcIpamPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcIpamPoolTimeoutsOutputReference <a name="VpcIpamPoolTimeoutsOutputReference" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcIpamPool } from '@cdktf/provider-aws'

new vpcIpamPool.VpcIpamPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcIpamPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.vpcIpamPool.VpcIpamPoolTimeouts">VpcIpamPoolTimeouts</a> | cdktf.IResolvable

---



