# `datasyncLocationNfs` Submodule <a name="`datasyncLocationNfs` Submodule" id="@cdktf/provider-aws.datasyncLocationNfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationNfs <a name="DatasyncLocationNfs" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs aws_datasync_location_nfs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

new datasyncLocationNfs.DatasyncLocationNfs(scope: Construct, id: string, config: DatasyncLocationNfsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig">DatasyncLocationNfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig">DatasyncLocationNfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig">putOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions"></a>

```typescript
public putMountOptions(value: DatasyncLocationNfsMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `putOnPremConfig` <a name="putOnPremConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig"></a>

```typescript
public putOnPremConfig(value: DatasyncLocationNfsOnPremConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

datasyncLocationNfs.DatasyncLocationNfs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput">onPremConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput">serverHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationNfsMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a>

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig"></a>

```typescript
public readonly onPremConfig: DatasyncLocationNfsOnPremConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `onPremConfigInput`<sup>Optional</sup> <a name="onPremConfigInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput"></a>

```typescript
public readonly onPremConfigInput: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput"></a>

```typescript
public readonly serverHostnameInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationNfsConfig <a name="DatasyncLocationNfsConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

const datasyncLocationNfsConfig: datasyncLocationNfs.DatasyncLocationNfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | on_prem_config block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname">serverHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig"></a>

```typescript
public readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

on_prem_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}.

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#id DatasyncLocationNfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags DatasyncLocationNfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}.

---

### DatasyncLocationNfsMountOptions <a name="DatasyncLocationNfsMountOptions" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

const datasyncLocationNfsMountOptions: datasyncLocationNfs.DatasyncLocationNfsMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#version DatasyncLocationNfs#version}. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#version DatasyncLocationNfs#version}.

---

### DatasyncLocationNfsOnPremConfig <a name="DatasyncLocationNfsOnPremConfig" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

const datasyncLocationNfsOnPremConfig: datasyncLocationNfs.DatasyncLocationNfsOnPremConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}. |

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationNfsMountOptionsOutputReference <a name="DatasyncLocationNfsMountOptionsOutputReference" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

new datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---


### DatasyncLocationNfsOnPremConfigOutputReference <a name="DatasyncLocationNfsOnPremConfigOutputReference" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/provider-aws'

new datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---



