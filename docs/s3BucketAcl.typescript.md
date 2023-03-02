# `s3BucketAcl` Submodule <a name="`s3BucketAcl` Submodule" id="@cdktf/provider-aws.s3BucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketAcl <a name="S3BucketAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl aws_s3_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAcl(scope: Construct, id: string, config: S3BucketAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig">S3BucketAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig">S3BucketAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy">putAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy">resetAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessControlPolicy` <a name="putAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy"></a>

```typescript
public putAccessControlPolicy(value: S3BucketAclAccessControlPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.putAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `resetAccessControlPolicy` <a name="resetAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAccessControlPolicy"></a>

```typescript
public resetAccessControlPolicy(): void
```

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

s3BucketAcl.S3BucketAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

s3BucketAcl.S3BucketAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

s3BucketAcl.S3BucketAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy">accessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput">accessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessControlPolicy`<sup>Required</sup> <a name="accessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicy"></a>

```typescript
public readonly accessControlPolicy: S3BucketAclAccessControlPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference">S3BucketAclAccessControlPolicyOutputReference</a>

---

##### `accessControlPolicyInput`<sup>Optional</sup> <a name="accessControlPolicyInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.accessControlPolicyInput"></a>

```typescript
public readonly accessControlPolicyInput: S3BucketAclAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketAclAccessControlPolicy <a name="S3BucketAclAccessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

const s3BucketAclAccessControlPolicy: s3BucketAcl.S3BucketAclAccessControlPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | owner block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant">grant</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]</code> | grant block. |

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.owner"></a>

```typescript
public readonly owner: S3BucketAclAccessControlPolicyOwner;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

owner block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#owner S3BucketAcl#owner}

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy.property.grant"></a>

```typescript
public readonly grant: IResolvable | S3BucketAclAccessControlPolicyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]

grant block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grant S3BucketAcl#grant}

---

### S3BucketAclAccessControlPolicyGrant <a name="S3BucketAclAccessControlPolicyGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

const s3BucketAclAccessControlPolicyGrant: s3BucketAcl.S3BucketAclAccessControlPolicyGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | grantee block. |

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#permission S3BucketAcl#permission}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant.property.grantee"></a>

```typescript
public readonly grantee: S3BucketAclAccessControlPolicyGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

grantee block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#grantee S3BucketAcl#grantee}

---

### S3BucketAclAccessControlPolicyGrantGrantee <a name="S3BucketAclAccessControlPolicyGrantGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

const s3BucketAclAccessControlPolicyGrantGrantee: s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress">emailAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#type S3BucketAcl#type}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#email_address S3BucketAcl#email_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#uri S3BucketAcl#uri}.

---

### S3BucketAclAccessControlPolicyOwner <a name="S3BucketAclAccessControlPolicyOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

const s3BucketAclAccessControlPolicyOwner: s3BucketAcl.S3BucketAclAccessControlPolicyOwner = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#display_name S3BucketAcl#display_name}.

---

### S3BucketAclConfig <a name="S3BucketAclConfig" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

const s3BucketAclConfig: s3BucketAcl.S3BucketAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy">accessControlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | access_control_policy block. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#bucket S3BucketAcl#bucket}.

---

##### `accessControlPolicy`<sup>Optional</sup> <a name="accessControlPolicy" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.accessControlPolicy"></a>

```typescript
public readonly accessControlPolicy: S3BucketAclAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#access_control_policy S3BucketAcl#access_control_policy}

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#acl S3BucketAcl#acl}.

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#expected_bucket_owner S3BucketAcl#expected_bucket_owner}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_acl#id S3BucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketAclAccessControlPolicyGrantGranteeOutputReference <a name="S3BucketAclAccessControlPolicyGrantGranteeOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetEmailAddress"></a>

```typescript
public resetEmailAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress">emailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddressInput"></a>

```typescript
public readonly emailAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.emailAddress"></a>

```typescript
public readonly emailAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketAclAccessControlPolicyGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---


### S3BucketAclAccessControlPolicyGrantList <a name="S3BucketAclAccessControlPolicyGrantList" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAclAccessControlPolicyGrantList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get"></a>

```typescript
public get(index: number): S3BucketAclAccessControlPolicyGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3BucketAclAccessControlPolicyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]

---


### S3BucketAclAccessControlPolicyGrantOutputReference <a name="S3BucketAclAccessControlPolicyGrantOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee">putGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrantee` <a name="putGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee"></a>

```typescript
public putGrantee(value: S3BucketAclAccessControlPolicyGrantGrantee): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.putGrantee.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.resetGrantee"></a>

```typescript
public resetGrantee(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee">grantee</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput">granteeInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.grantee"></a>

```typescript
public readonly grantee: S3BucketAclAccessControlPolicyGrantGranteeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGranteeOutputReference">S3BucketAclAccessControlPolicyGrantGranteeOutputReference</a>

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.granteeInput"></a>

```typescript
public readonly granteeInput: S3BucketAclAccessControlPolicyGrantGrantee;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantGrantee">S3BucketAclAccessControlPolicyGrantGrantee</a>

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketAclAccessControlPolicyGrant | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a> | cdktf.IResolvable

---


### S3BucketAclAccessControlPolicyOutputReference <a name="S3BucketAclAccessControlPolicyOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner">putOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant">resetGrant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrant` <a name="putGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant"></a>

```typescript
public putGrant(value: IResolvable | S3BucketAclAccessControlPolicyGrant[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putGrant.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]

---

##### `putOwner` <a name="putOwner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner"></a>

```typescript
public putOwner(value: S3BucketAclAccessControlPolicyOwner): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.putOwner.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `resetGrant` <a name="resetGrant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.resetGrant"></a>

```typescript
public resetGrant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant">grant</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner">owner</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput">ownerInput</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grant"></a>

```typescript
public readonly grant: S3BucketAclAccessControlPolicyGrantList;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrantList">S3BucketAclAccessControlPolicyGrantList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.owner"></a>

```typescript
public readonly owner: S3BucketAclAccessControlPolicyOwnerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference">S3BucketAclAccessControlPolicyOwnerOutputReference</a>

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3BucketAclAccessControlPolicyGrant[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyGrant">S3BucketAclAccessControlPolicyGrant</a>[]

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.ownerInput"></a>

```typescript
public readonly ownerInput: S3BucketAclAccessControlPolicyOwner;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketAclAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicy">S3BucketAclAccessControlPolicy</a>

---


### S3BucketAclAccessControlPolicyOwnerOutputReference <a name="S3BucketAclAccessControlPolicyOwnerOutputReference" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer"></a>

```typescript
import { s3BucketAcl } from '@cdktf/provider-aws'

new s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwnerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: S3BucketAclAccessControlPolicyOwner;
```

- *Type:* <a href="#@cdktf/provider-aws.s3BucketAcl.S3BucketAclAccessControlPolicyOwner">S3BucketAclAccessControlPolicyOwner</a>

---



