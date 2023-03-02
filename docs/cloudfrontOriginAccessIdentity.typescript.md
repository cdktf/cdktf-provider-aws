# `cloudfrontOriginAccessIdentity` Submodule <a name="`cloudfrontOriginAccessIdentity` Submodule" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontOriginAccessIdentity <a name="CloudfrontOriginAccessIdentity" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity aws_cloudfront_origin_access_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer"></a>

```typescript
import { cloudfrontOriginAccessIdentity } from '@cdktf/provider-aws'

new cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity(scope: Construct, id: string, config?: CloudfrontOriginAccessIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig">CloudfrontOriginAccessIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct"></a>

```typescript
import { cloudfrontOriginAccessIdentity } from '@cdktf/provider-aws'

cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement"></a>

```typescript
import { cloudfrontOriginAccessIdentity } from '@cdktf/provider-aws'

cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource"></a>

```typescript
import { cloudfrontOriginAccessIdentity } from '@cdktf/provider-aws'

cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference">callerReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath">cloudfrontAccessIdentityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn">iamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId">s3CanonicalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.callerReference"></a>

```typescript
public readonly callerReference: string;
```

- *Type:* string

---

##### `cloudfrontAccessIdentityPath`<sup>Required</sup> <a name="cloudfrontAccessIdentityPath" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.cloudfrontAccessIdentityPath"></a>

```typescript
public readonly cloudfrontAccessIdentityPath: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.iamArn"></a>

```typescript
public readonly iamArn: string;
```

- *Type:* string

---

##### `s3CanonicalUserId`<sup>Required</sup> <a name="s3CanonicalUserId" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.s3CanonicalUserId"></a>

```typescript
public readonly s3CanonicalUserId: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontOriginAccessIdentityConfig <a name="CloudfrontOriginAccessIdentityConfig" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.Initializer"></a>

```typescript
import { cloudfrontOriginAccessIdentity } from '@cdktf/provider-aws'

const cloudfrontOriginAccessIdentityConfig: cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}. |
| <code><a href="#@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#comment CloudfrontOriginAccessIdentity#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cloudfrontOriginAccessIdentity.CloudfrontOriginAccessIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_access_identity#id CloudfrontOriginAccessIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



