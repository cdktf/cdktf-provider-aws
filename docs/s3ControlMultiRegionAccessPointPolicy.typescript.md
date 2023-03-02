# `s3ControlMultiRegionAccessPointPolicy` Submodule <a name="`s3ControlMultiRegionAccessPointPolicy` Submodule" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointPolicy <a name="S3ControlMultiRegionAccessPointPolicy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy aws_s3control_multi_region_access_point_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

new s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig">S3ControlMultiRegionAccessPointPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig">S3ControlMultiRegionAccessPointPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDetails` <a name="putDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails"></a>

```typescript
public putDetails(value: S3ControlMultiRegionAccessPointPolicyDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: S3ControlMultiRegionAccessPointPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established">established</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed">proposed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput">detailsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.details"></a>

```typescript
public readonly details: S3ControlMultiRegionAccessPointPolicyDetailsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference">S3ControlMultiRegionAccessPointPolicyDetailsOutputReference</a>

---

##### `established`<sup>Required</sup> <a name="established" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.established"></a>

```typescript
public readonly established: string;
```

- *Type:* string

---

##### `proposed`<sup>Required</sup> <a name="proposed" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.proposed"></a>

```typescript
public readonly proposed: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference">S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.detailsInput"></a>

```typescript
public readonly detailsInput: S3ControlMultiRegionAccessPointPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: S3ControlMultiRegionAccessPointPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointPolicyConfig <a name="S3ControlMultiRegionAccessPointPolicyConfig" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

const s3ControlMultiRegionAccessPointPolicyConfig: s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.details"></a>

```typescript
public readonly details: S3ControlMultiRegionAccessPointPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#details S3ControlMultiRegionAccessPointPolicy#details}

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: S3ControlMultiRegionAccessPointPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}

---

### S3ControlMultiRegionAccessPointPolicyDetails <a name="S3ControlMultiRegionAccessPointPolicyDetails" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

const s3ControlMultiRegionAccessPointPolicyDetails: s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}.

---

### S3ControlMultiRegionAccessPointPolicyTimeouts <a name="S3ControlMultiRegionAccessPointPolicyTimeouts" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

const s3ControlMultiRegionAccessPointPolicyTimeouts: s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointPolicyDetailsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyDetailsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

new s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlMultiRegionAccessPointPolicyDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyDetails">S3ControlMultiRegionAccessPointPolicyDetails</a>

---


### S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference <a name="S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointPolicy } from '@cdktf/provider-aws'

new s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3ControlMultiRegionAccessPointPolicyTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3ControlMultiRegionAccessPointPolicy.S3ControlMultiRegionAccessPointPolicyTimeouts">S3ControlMultiRegionAccessPointPolicyTimeouts</a> | cdktf.IResolvable

---



